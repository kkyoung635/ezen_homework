import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { onUpdate } from '../../../store/modules/orderSlice';
import { onOff } from '../../../store/modules/menuSlice';

const CartSheet = () => {
    const { orderData, isCart } = useSelector((state) => state.order);
    const dispatch = useDispatch();
    return (
        <>
            {isCart && orderData.length > 0 && (
                <div className="cart-sheet">
                    <table>
                        <colgroup>
                            <col className="w1" />
                            <col className="w2" />
                            <col className="w3" />
                            <col className="w4" />
                        </colgroup>
                        <thead>
                            <tr>
                                <td>상품</td>
                                <td>수량</td>
                                <td>금액</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order) => (
                                <CartItem key={order.id} order={order} />
                            ))}
                        </tbody>
                    </table>
                    <p className="fin-order">
                        <span>
                            합계 금액 :{' '}
                            {orderData
                                .reduce((acc, cur) => acc + cur.total, 0)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원{' '}
                        </span>
                        <button
                            onClick={() => {
                                dispatch(onUpdate());
                                dispatch(onOff());
                            }}
                        >
                            주문하기
                        </button>
                    </p>
                </div>
            )}
        </>
    );
};

export default CartSheet;
