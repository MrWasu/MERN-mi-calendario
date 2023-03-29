import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice } from './';


export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({  // apuntes esto y de los middlewares?
        serializableCheck: false
    })
})
