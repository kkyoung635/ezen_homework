import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onMsg } from '../../../store/modules/orderSlice';

const Message = () => {
    const { isMsg, msg } = useSelector((state) => state.order);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(onMsg(false));
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [isMsg]);
    return <div className={`message ${isMsg ? 'on' : ''}`}>{msg}</div>;
    // return <div className={`message on`}>메뉴가 추가되었습니다.</div>;
};

export default Message;
