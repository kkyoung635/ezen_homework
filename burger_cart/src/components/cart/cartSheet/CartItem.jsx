import { useDispatch, useSelector } from 'react-redux';
import { onDel, onEdit } from '../../../store/modules/orderSlice';
import { useEffect, useState } from 'react';

const CartItem = ({ order }) => {
    const { id, name, imgurl, total, quantity } = order;
    const dispatch = useDispatch();

    const [modQuan, setModQuan] = useState(quantity);
    let modOrder = { ...order, quantity: modQuan };

    const changeInput = (e) => {
        const { value } = e.target;
        if (Number.isNaN(value.trim())) return false;
        setModQuan(parseInt(value));
        modOrder = { ...order, quantity: modQuan };
    };

    useEffect(() => {
        setModQuan(quantity);
    }, [quantity]);
    return (
        <tr>
            <td>
                <span>
                    <img src={imgurl} alt={name} />
                </span>
                <em>{name}</em>
            </td>
            <td>
                <input type="number" name="quantity" id="quantity" value={modQuan} onChange={changeInput} />
            </td>
            <td>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
            <td>
                <p>
                    <button onClick={() => dispatch(onEdit(modOrder))}>수정</button>
                    <button onClick={() => dispatch(onDel(id))}>삭제</button>
                </p>
            </td>
        </tr>
    );
};

export default CartItem;
