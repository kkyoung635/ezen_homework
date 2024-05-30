import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onShow } from '../../../store/modules/menuSlice';

const MenuItem = ({ id, imgurl, menuname, isShow }) => {
    const dispatch = useDispatch();
    return (
        <li onClick={() => dispatch(onShow(id))} className={isShow ? 'on' : ''}>
            <span>{menuname}</span>
            <em>
                <img src={imgurl} alt={menuname} />
            </em>
        </li>
    );
};

export default MenuItem;
