import '../assets/css/board.scss';
import Acd from './acd/Acd';
import ImgView from './img/ImgView';
import boardData from '../assets/api/boardData.js';
import { useState } from 'react';

const Board = () => {
    const [data, setData] = useState(boardData);
    const [num, setNums] = useState(1);
    const [cnt, setCnt] = useState(num);
    const [dataNum, setDataNum] = useState(data[0]);

    const onView = (id) => {
        setNums(id);
        setDataNum(data.find((item) => item.id === id));
        setData(data.map((item) => (item.id === id ? { ...item, isShow: true } : { ...item, isShow: false })));
    };
    return (
        <div className="wrap">
            <div className="inner">
                <ImgView data={data} dataNum={dataNum} onView={onView} num={num} cnt={cnt} setCnt={setCnt} />
                <Acd data={data} onView={onView} num={num} cnt={cnt} setCnt={setCnt} />
            </div>
        </div>
    );
};

export default Board;
