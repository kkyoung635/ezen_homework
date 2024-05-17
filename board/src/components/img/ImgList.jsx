import ImgItem from './ImgItem';

const ImgList = ({ data, onView, cnt, setCnt }) => {
    return (
        <div className="thums-list">
            <ul>
                {data.map((item) => (
                    <ImgItem key={item.id} item={item} onView={onView} cnt={cnt} setCnt={setCnt} />
                ))}
            </ul>
        </div>
    );
};

export default ImgList;
