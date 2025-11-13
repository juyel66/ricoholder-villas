// src/store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * NOTE: Vite env var or fallback to your local API base.
 * Example in Vite .env: VITE_API_BASE="http://10.10.13.60:8000/api"
 */
export const API_BASE = import.meta.env.VITE_API_BASE || "http://10.10.13.60:8000/api";

/* ------------------------
   Helpers: token & user storage
   ------------------------ */
const ACCESS_KEY = "auth_access";
const REFRESH_KEY = "auth_refresh";
const USER_KEY = "auth_user";

const saveTokens = ({ access, refresh }) => {
  try {
    if (access) localStorage.setItem(ACCESS_KEY, access);
    if (refresh) localStorage.setItem(REFRESH_KEY, refresh);
  } catch (e) {}
};

const clearTokens = () => {
  try {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  } catch (e) {}
};

export const getAccessToken = () => {
  try { return localStorage.getItem(ACCESS_KEY); } catch (e) { return null; }
};
export const getRefreshToken = () => {
  try { return localStorage.getItem(REFRESH_KEY); } catch (e) { return null; }
};

const saveUser = (user) => {
  try { localStorage.setItem(USER_KEY, JSON.stringify(user || null)); } catch (e) {}
};
const getUserFromStorage = () => {
  try {
    const v = localStorage.getItem(USER_KEY);
    return v ? JSON.parse(v) : null;
  } catch (e) {
    return null;
  }
};
const clearUser = () => {
  try { localStorage.removeItem(USER_KEY); } catch (e) {}
};

/**
 * authFetch creates a fresh headers object so we never mutate an input headers object.
 * It attaches Authorization header if access token exists.
 */
const authFetch = (url, options = {}) => {
  const headers = { ...(options.headers || {}) };
  const access = getAccessToken();
  if (access) headers["Authorization"] = `Bearer ${access}`;
  headers["Content-Type"] = headers["Content-Type"] || "application/json";
  return fetch(url, { ...options, headers });
};

/* ------------------------
   Async thunks
   ------------------------ */

/**
 * Register user
 * lifecycle comments:
 *  - "register started" => pending
 *  - "register succeeded" => fulfilled
 *  - "register failed" => rejected
 */
export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    // payload: { email, name, phone, password1, password2 }
    try {
      const res = await fetch(`${API_BASE}/registration/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      return data; // expected created user object
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

/**
 * Login (custom token endpoint expected to return { access, refresh, user })
 * lifecycle comments:
 *  - "login started" => pending
 *  - "login succeeded" => fulfilled
 *  - "login failed" => rejected
 */
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      // save tokens + user
      saveTokens({ access: data.access, refresh: data.refresh });
      saveUser(data.user || null);
      return data; // { access, refresh, user }
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

// refreshToken 
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = getRefreshToken();
      if (!refresh) return rejectWithValue({ detail: "No refresh token" });
      const res = await fetch(`${API_BASE}/auth/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      // persist new access token (do NOT remove user)
      if (data.access) {
        try { localStorage.setItem(ACCESS_KEY, data.access); } catch (e) {}
      }
      return data; // { access }
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

// logout 
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const access = getAccessToken();
      const refresh = getRefreshToken();
      const res = await fetch(`${API_BASE}/auth/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
        body: JSON.stringify({ refresh }),
      });
      // even if server returns 200 with detail, we clear tokens and user locally
      clearTokens();
      clearUser();
      if (res.ok) return { detail: "Successfully logged out." };
      const data = await res.json();
      return rejectWithValue(data);
    } catch (err) {
      clearTokens();
      clearUser();
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

// current User  
export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      let res = await authFetch(`${API_BASE}/auth/user/`);
      // if unauthorized, try refresh once
      if (res.status === 401) {
        const refreshed = await dispatch(refreshToken());
        if (refreshToken.fulfilled.match(refreshed)) {
          res = await authFetch(`${API_BASE}/auth/user/`);
        } else {
          // can't refresh => reject
          return rejectWithValue({ detail: "Session expired" });
        }
      }
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      // persist fresh user to storage so reload keeps it
      saveUser(data);
      return data;
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

// Admin user management 
export const adminListUsers = createAsyncThunk(
  "auth/adminListUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await authFetch(`${API_BASE}/admin/users/`);
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      return data;
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

/**
 * Admin: create user POST /admin/users/
 * payload: { email, name, phone, role, permission, password, address, is_active, is_staff }
 */
export const adminCreateUser = createAsyncThunk(
  "auth/adminCreateUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authFetch(`${API_BASE}/admin/users/`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      return data;
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

/**
 * Admin: update user PUT /admin/users/<id>/
 * payload: { id, body: { ...fields } }
 */
export const adminUpdateUser = createAsyncThunk(
  "auth/adminUpdateUser",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const res = await authFetch(`${API_BASE}/admin/users/${id}/`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      return data;
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

/**
 * Admin: delete user DELETE /admin/users/<id>/
 */
export const adminDeleteUser = createAsyncThunk(
  "auth/adminDeleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await authFetch(`${API_BASE}/admin/users/${id}/`, {
        method: "DELETE",
      });
      if (res.status === 204) return { id };
      const data = await res.json();
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);



/**
 * Change password for authenticated user POST /auth/password/change/
 * payload: { old_password, new_password1, new_password2 }
 */


export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authFetch(`${API_BASE}/auth/password/change/`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) return rejectWithValue(data);
      return data; // { detail: "New password has been saved." }
    } catch (err) {
      return rejectWithValue({ detail: err.message || "Network error" });
    }
  }
);

/* ------------------------
   Slice
   ------------------------ */

const initialState = {
  access: getAccessToken(),
  refresh: getRefreshToken(),
  user: getUserFromStorage(), // rehydrate user from localStorage so refresh keeps login
  usersList: [], // for admin user listing
  loading: false,
  error: null,
  lastAction: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // synchronous helpers
    clearAuthState(state) {
      state.access = null;
      state.refresh = null;
      state.user = null;
      state.loading = false;
      state.error = null;
      state.lastAction = "clearAuthState";
      clearTokens();
      clearUser();
    },
    // set role locally (does not call server) — useful for optimistic UI
    setLocalRole(state, action) {
      if (state.user) state.user.role = action.payload;
      state.lastAction = "setLocalRole";
      // persist role change locally as well
      saveUser(state.user);
    },
  },
  extraReducers: (builder) => {
    // ---------- register ----------
    builder.addCase(register.pending, (state) => {
      // register started
      state.loading = true;
      state.error = null;
      state.lastAction = "register_started";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      // register succeeded
      state.loading = false;
      state.error = null;
      state.lastAction = "register_succeeded";
      // server returns created user object — keep a shallow copy
      state.user = action.payload;
      // optionally persist created user (if you want)
      saveUser(action.payload);
    });
    builder.addCase(register.rejected, (state, action) => {
      // register failed
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "register_failed";
    });

    // ---------- login ----------
    builder.addCase(login.pending, (state) => {
      // login started
      state.loading = true;
      state.error = null;
      state.lastAction = "login_started";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // login succeeded
      state.loading = false;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.user = action.payload.user;
      state.error = null;
      state.lastAction = "login_succeeded";
      // persist user (already saved in thunk but ensure here too)
      saveTokens({ access: action.payload.access, refresh: action.payload.refresh });
      saveUser(action.payload.user);
    });
    builder.addCase(login.rejected, (state, action) => {
      // login failed
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "login_failed";
      clearTokens();
      clearUser();
      state.access = null;
      state.refresh = null;
      state.user = null;
    });

    // ---------- refresh ----------
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = true;
      state.lastAction = "refresh_started";
      state.error = null;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.access) {
        state.access = action.payload.access;
        try { localStorage.setItem(ACCESS_KEY, action.payload.access); } catch (e) {}
      }
      // keep user intact so refresh doesn't log user out
      state.lastAction = "refresh_succeeded";
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "refresh_failed";
      // failed refresh -> clear everything
      state.access = null;
      state.refresh = null;
      state.user = null;
      clearTokens();
      clearUser();
    });

    // ---------- logout ----------
    builder.addCase(logout.pending, (state) => {
      // logout started
      state.loading = true;
      state.lastAction = "logout_started";
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      // logout succeeded
      state.loading = false;
      state.access = null;
      state.refresh = null;
      state.user = null;
      state.error = null;
      state.lastAction = "logout_succeeded";
      clearTokens();
      clearUser();
    });
    builder.addCase(logout.rejected, (state, action) => {
      // logout failed
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "logout_failed";
      // still clear tokens locally for safety
      state.access = null;
      state.refresh = null;
      state.user = null;
      clearTokens();
      clearUser();
    });

    // ---------- fetchCurrentUser ----------
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.loading = true;
      state.lastAction = "fetchCurrentUser_started";
      state.error = null;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.lastAction = "fetchCurrentUser_succeeded";
      // persist fresh user
      saveUser(action.payload);
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "fetchCurrentUser_failed";
    });

    // ---------- adminListUsers ----------
    builder.addCase(adminListUsers.pending, (state) => {
      state.loading = true;
      state.lastAction = "adminListUsers_started";
      state.error = null;
    });
    builder.addCase(adminListUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = action.payload;
      state.lastAction = "adminListUsers_succeeded";
    });
    builder.addCase(adminListUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "adminListUsers_failed";
    });

    // ---------- adminCreateUser ----------
    builder.addCase(adminCreateUser.pending, (state) => {
      state.loading = true;
      state.lastAction = "adminCreateUser_started";
      state.error = null;
    });
    builder.addCase(adminCreateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = [action.payload, ...state.usersList];
      state.lastAction = "adminCreateUser_succeeded";
    });
    builder.addCase(adminCreateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "adminCreateUser_failed";
    });

    // ---------- adminUpdateUser ----------
    builder.addCase(adminUpdateUser.pending, (state) => {
      state.loading = true;
      state.lastAction = "adminUpdateUser_started";
      state.error = null;
    });
    builder.addCase(adminUpdateUser.fulfilled, (state, action) => {
      state.loading = false;
      const updated = action.payload;
      state.usersList = state.usersList.map((u) => (u.id === updated.id ? updated : u));
      // If current user was updated, sync user object and persist
      if (state.user && state.user.id === updated.id) {
        state.user = { ...state.user, ...updated };
        saveUser(state.user);
      }
      state.lastAction = "adminUpdateUser_succeeded";
    });
    builder.addCase(adminUpdateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "adminUpdateUser_failed";
    });

    // ---------- adminDeleteUser ----------
    builder.addCase(adminDeleteUser.pending, (state) => {
      state.loading = true;
      state.lastAction = "adminDeleteUser_started";
      state.error = null;
    });
    builder.addCase(adminDeleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = state.usersList.filter((u) => u.id !== action.payload.id);
      state.lastAction = "adminDeleteUser_succeeded";
    });
    builder.addCase(adminDeleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "adminDeleteUser_failed";
    });

    // ---------- changePassword ----------
    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
      state.lastAction = "changePassword_started";
      state.error = null;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.lastAction = "changePassword_succeeded";
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
      state.lastAction = "changePassword_failed";
    });
  },
});

export const { clearAuthState, setLocalRole } = authSlice.actions;

/* Selectors */
export const selectAuth = (state) => state.auth;
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => Boolean(state.auth.access && state.auth.user);
export const selectUsersList = (state) => state.auth.usersList;

export default authSlice.reducer;
