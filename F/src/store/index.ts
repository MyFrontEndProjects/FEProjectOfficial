import {configureStore} from "@reduxjs/toolkit";
import authResucer  from "./reducers/auth";
const store = configureStore({
    reducer: {
        auth: authResucer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;