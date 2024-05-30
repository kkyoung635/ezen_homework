import { configureStore } from '@reduxjs/toolkit';
import menus from './modules/menuSlice';
import order from './modules/orderSlice';

export const store = configureStore({
    reducer: {
        menus,
        order,
    },
});
