import { useEffect, useState } from 'react';

const AcdList = ({ item, onView, num, setCnt, cnt }) => {
    const { id, brand, title, desc, isShow, price, sale } = item;

    useEffect(() => {
        onView(cnt);
    }, [cnt]);

    const changeCnt = (id) => {
        setCnt(id);
    };
    return (
        <>
            <dt
                className={isShow ? 'on' : ''}
                onClick={() => {
                    onView(id);
                    changeCnt(id);
                }}
            >
                [{brand}] {title}
            </dt>
            <dd className={isShow ? 'on' : ''}>
                {desc}
                <br />
                <div className="pricing">
                    <p className="per">
                        {parseInt((sale / price) * 100)}
                        <span>%</span>
                    </p>
                    <p className="regul">
                        {(price + 12000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        <span>원</span>
                    </p>
                    <p className="sale">
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        <span>원</span>
                    </p>
                </div>
            </dd>
        </>
    );
};

export default AcdList;
