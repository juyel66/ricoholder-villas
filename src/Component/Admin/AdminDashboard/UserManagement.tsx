import React, { useState } from "react";
import { Trash2 } from "lucide-react";

// UserManagement.jsx
// Tailwind + React component using static fake JSON data.
// - Roles: manager, admin, customer
// - Change role via dropdown
// - Delete user (red button with icon)
// - Responsive: table on desktop, stacked cards on mobile
// - Table header and body are visually aligned and unified section

const initialUsers = [
  { id: 1, name: "Ayesha Khan", email: "ayesha.khan@example.com", role: "manager" },
  { id: 2, name: "Rafi Ahmed", email: "rafi.ahmed@example.com", role: "admin" },
  { id: 3, name: "Minu Roy", email: "minu.roy@example.com", role: "customer" },
  { id: 4, name: "Sabbir Hossain", email: "sabbir.hossain@example.com", role: "customer" },
  { id: 5, name: "Kamal Uddin", email: "kamal.uddin@example.com", role: "manager" },
];

const ROLE_OPTIONS = ["manager", "admin", "customer"];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");

  function handleRoleChange(id, newRole) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
  }

  function handleDelete(id) {
    const u = users.find((x) => x.id === id);
    if (!u) return;
    const confirmed = window.confirm(`Delete user ${u.name} (${u.email})?`);
    if (!confirmed) return;
    setUsers((prev) => prev.filter((x) => x.id !== id));
  }

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-1">User Management</h1>
          <p className="text-sm text-gray-600 mb-4">Manage users, change roles, and delete users.</p>

          <input
            type="search"
            placeholder="Search name, email or role"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-96 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
          />
        </div>

        {/* Unified table section */}
        <div className="bg-white border rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-700">No</th>
                <th className="px-6 py-3 font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 font-medium text-gray-700">Role</th>
                <th className="px-6 py-3 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user,index) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{index +1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="px-3 py-2 border rounded-md text-sm"
                      aria-label={`Change role for ${user.name}`}
                    >
                      {ROLE_OPTIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-white text-sm"
                      style={{ backgroundColor: "#DC2626" }} // Tailwind red-600
                    >
                      <Trash2 size={16} /> 
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-6 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden mt-6 space-y-4">
          {filtered.map((user) => (
            <div key={user.id} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{user.name}</div>
                  <div className="text-xs text-gray-600">{user.email}</div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-xs text-gray-500">Role</div>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="mt-1 px-2 py-1 border rounded-md text-sm"
                    aria-label={`Change role for ${user.name}`}
                  >
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-white text-sm"
                  style={{ backgroundColor: "#DC2626" }} // Tailwind red-600
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-sm text-gray-500">No users found.</div>
          )}
        </div>
      </div>
    </div>
  );
}