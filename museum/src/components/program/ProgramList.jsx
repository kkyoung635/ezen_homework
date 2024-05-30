import ProgramItem from './ProgramItem';
import './ProgramList.scss';
const ProgramList = ({ data }) => {
    console.log(data);
    return (
        <>
            <ul className="pro-list">
                {data.map((item) => (
                    <ProgramItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default ProgramList;
