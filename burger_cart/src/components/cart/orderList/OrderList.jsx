import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAdd } from '../../../store/modules/orderSlice';

const OrderList = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { num, menus } = useSelector((state) => state.menus);
    const newMenu = menus.find((menu) => menu.id === num);

    // const { current } = useSelector((state) => state.order);
    const [orders, setOrders] = useState({ name: '', price: null, quantity: null, total: null });
    const cntRef = useRef(1);
    const onQuan = (e) => {
        setQuantity(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newOrders = {
            name: newMenu.menuname,
            price: newMenu.price,
            quantity: parseInt(quantity),
            imgurl: newMenu.imgurl,
            total: quantity * newMenu.price,
        };
        setOrders(newOrders); // 상태 업데이트
    };

    useEffect(() => {
        if (orders.name) {
            dispatch(onAdd(orders));
            cntRef.current.focus();
        }
    }, [orders]);
    return (
        <>
            {newMenu && (
                <form className="order-list" onSubmit={onSubmit}>
                    <h2>{newMenu.menuname}</h2>
                    <p>
                        <span>판매가</span>
                        <span>{newMenu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} : 원</span>
                    </p>

                    <p>
                        <span>수량</span>
                        <select name="amount" id="amount" value={quantity} onChange={onQuan} ref={cntRef}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </p>
                    <p>
                        <span>합계</span>
                        <span>{(quantity * newMenu.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
                    </p>
                    <button type="submit">메뉴추가</button>
                </form>
            )}
        </>
    );
};

export default OrderList;
