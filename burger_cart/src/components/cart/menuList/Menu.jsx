import { useEffect } from 'react';
import MenuItem from './MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../../store/modules/getThunks';
import { onToggle } from '../../../store/modules/orderSlice';

const Menu = () => {
    const { menus } = useSelector((state) => state.menus);
    const { orderData, isCart } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu());
    }, []);

    return (
        <section className="burger-list">
            <h2>
                <em>HAMBURGER</em> MENU
            </h2>
            <div className="listing">
                <i className="xi-basket" onClick={() => dispatch(onToggle(isCart))}>
                    {orderData.length > 0 && <span>{orderData.length}</span>}
                </i>

                <ul>{menus.length > 0 && menus.map((menus) => <MenuItem key={menus.id} {...menus} />)}</ul>
            </div>
        </section>
    );
};

export default Menu;
