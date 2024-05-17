import { useEffect } from 'react';

const ImgItem = ({ item, onView, cnt, setCnt }) => {
    const { isShow, imgurl, id } = item;

    useEffect(() => {
        onView(cnt);
    }, [cnt]);

    const changeNum = (id) => {
        setCnt(id);
    };
    return (
        <>
            <li
                className={isShow ? 'on' : ''}
                onClick={() => {
                    onView(id);
                    changeNum(id);
                }}
            >
                <img src={imgurl} alt="" />
            </li>
        </>
    );
};

export default ImgItem;
