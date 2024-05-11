import './Exhibition.scss';
import ExhibitionList from './ExhibitionList';
import { exList } from '../assets/api/data.js';

const Exhibition = () => {
    return (
        <>
            <div className="con-box box2">
                <div className="inner">
                    <h2>시대별 문화를 즐길 수 있는 전시</h2>
                    <p>현재 진행 중인 전시를 알아보세요.</p>
                    <ExhibitionList data={exList} />
                </div>
            </div>
        </>
    );
};

export default Exhibition;
