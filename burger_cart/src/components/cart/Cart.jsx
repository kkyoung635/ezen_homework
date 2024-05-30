import '../../styled/style.scss';
import menu from '../../assets/api/cartData';
import Message from './message/Message';
import Menu from './menuList/Menu';
import OrderList from './orderList/OrderList';
import CartSheet from './cartSheet/CartSheet';
import { useEffect, useRef, useState } from 'react';

const Cart = () => {
    return (
        <div id="wrap">
            <div className="inner">
                <Message />
                <Menu />
                <OrderList />
                <CartSheet />
            </div>
        </div>
    );
};

export default Cart;
