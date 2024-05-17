import { useEffect, useState } from 'react';
import ImgList from './ImgList';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const ImgThum = ({ data, imgurl, onView, num, setCnt, cnt }) => {
    useEffect(() => {
        onView(cnt);
        return () => {};
    }, [cnt]);

    const onCnt = (x) => {
        setCnt((preCnt) => {
            const newCnt = preCnt + x;
            if (newCnt > data.length) return 1;
            if (newCnt < 1) return data.length;
            return newCnt;
        });
    };
    return (
        <>
            <section>
                <p className="thum">
                    <img src={imgurl} alt="" />
                </p>
                <ImgList data={data} onView={onView} cnt={cnt} setCnt={setCnt} />
                <p className="btn">
                    <button className="prev" onClick={() => onCnt(-1)}>
                        <FaArrowLeft />
                    </button>
                    <button className="next" onClick={() => onCnt(+1)}>
                        <FaArrowRight />
                    </button>
                </p>
            </section>
        </>
    );
};

export default ImgThum;
