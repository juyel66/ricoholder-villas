import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../src/features/authSlice.ts";

const store = configureStore({
    reducer: {
        posts: postReducer

    },

})

export default store;