import '../../styled/style.scss';
import menu from '../../assets/api/cartData';
import Message from './message/Message';
import Menu from './menuList/Menu';
import OrderList from './orderList/OrderList';
import CartSheet from './cartSheet/CartSheet';
import { useEffect, useRef, useState } from 'react';

const Cart = () => {
    // const [menuData, setMenuData] = useState(menu);
    // const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    // const [isEdit, seIsEdit] = useState(false);
    // const [current, setCurrent] = useState({
    //     id: '',
    //     menuname: '',
    //     cnt: '',
    //     price: '',
    // });
    // const no = useRef(menu.length + 1);

    // const [msg, setMsg] = useState('메세지');
    // const [isMsg, setIsMsg] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cartData));
    // }, [cartData]);

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
