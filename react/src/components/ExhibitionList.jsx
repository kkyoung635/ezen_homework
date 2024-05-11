import ExhibitionItem from './ExhibitionItem';
import './ExhibitionList.scss';

const ExhibitionList = ({ data }) => {
    console.log(data);
    return (
        <>
            <ul className="ex-list">
                {data.map((item) => (
                    <ExhibitionItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default ExhibitionList;
