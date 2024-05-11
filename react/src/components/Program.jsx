import './Program.scss';
import ProgramList from './ProgramList';
import { pgList } from '../assets/api/data';
const Program = () => {
    console.log(pgList);
    return (
        <>
            <div className="con-box box3">
                <div className="inner">
                    <h2>민속박물관의 즐겁고 다양한 프로그램</h2>
                    <p>다양한 프로그램을 확인해보세요.</p>
                    <ProgramList data={pgList} />
                </div>
            </div>
        </>
    );
};

export default Program;
