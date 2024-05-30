import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderData: localStorage.getItem('orderData') ? JSON.parse(localStorage.getItem('orderData')) : [],
    current: null,
    text: '',
    isCart: false,
    isMsg: false,
    msg: '',
};
let no = initialState.orderData.length;
export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            const { name } = action.payload;
            const findData = state.orderData.find((order) => order.name === name);
            if (findData) {
                findData.quantity += action.payload.quantity;
                findData.total += action.payload.total;
            } else {
                state.orderData = [...state.orderData, { id: no++, ...action.payload }];
            }
            localStorage.setItem('orderData', JSON.stringify(state.orderData));
            state.isMsg = true;
            state.msg = '메뉴를 추가했습니다.';
        },
        onDel: (state, action) => {
            state.orderData = state.orderData.filter((order) => order.id !== action.payload);
            localStorage.setItem('orderData', JSON.stringify(state.orderData));
            state.isMsg = true;
            state.msg = '메뉴를 삭제했습니다.';
        },
        onToggle: (state, action) => {
            state.isCart = !action.payload;
        },
        onEdit: (state, action) => {
            const { id, quantity } = action.payload;
            const editData = state.orderData.find((order) => order.id === id);
            if (editData) {
                editData.quantity = action.payload.quantity;
                editData.total = editData.quantity * editData.price;
            }
            state.isMsg = true;
            state.msg = '수량을 수정했습니다.';
        },
        onUpdate: (state, action) => {
            state.orderData = [];
            localStorage.clear();
            state.isMsg = true;
            state.msg = '주문을 완료했습니다.';
            state.isCart = false;
        },
        onMsg: (state, action) => {
            state.isMsg = action.payload;
        },
    },
});

export const { onAdd, onDel, onToggle, onEdit, onUpdate, onMsg } = orderSlice.actions;
export default orderSlice.reducer;
