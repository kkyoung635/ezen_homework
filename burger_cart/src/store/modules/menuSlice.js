import { createSlice } from '@reduxjs/toolkit';
import { getMenu } from './getThunks';

const initialState = {
    menus: [],
    loading: true,
    info: null,
    num: null,
};

export const menusSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        onShow: (state, action) => {
            state.menus.forEach((menu) => {
                menu.isShow = false; // 모든 메뉴를 초기화
            });
            const show = state.menus.find((menu) => menu.id === action.payload);
            if (show) {
                show.isShow = !show.isShow;
            }
            state.num = action.payload;
        },
        onOff: (state, action) => {
            state.menus.forEach((menu) => {
                menu.isShow = false; // 모든 메뉴를 초기화
            });
            state.num = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.pending, (state, aciton) => {
                // 대기
                state.info = 'loading';
                state.loading = true;
            })
            .addCase(getMenu.fulfilled, (state, aciton) => {
                // 성공
                state.info = 'fulfilled';
                state.loading = false;
                state.menus = aciton.payload;
            })
            .addCase(getMenu.rejected, (state, action) => {
                // 실패
                state.info = 'rejected';
                state.loading = true;
            });
    },
});
export const { onShow, onOff } = menusSlice.actions;

export default menusSlice.reducer;
