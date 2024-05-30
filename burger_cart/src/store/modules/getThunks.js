import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import url from '../../assets/api/cartData.js';
// export const getMenu = createAsyncThunk('menu/getMenu', async () => {
//     const res = await axios.get(url);
//     return res.data;
// });

import menuData from '../../assets/api/cartData.js';

export const getMenu = createAsyncThunk('menu/getMenu', async () => {
    return menuData; // 정적 데이터 바로 반환
});
