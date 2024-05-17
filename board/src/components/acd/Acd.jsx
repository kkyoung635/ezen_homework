import AcdList from './AcdList';

const Acd = ({ data, onView, num, setCnt, cnt }) => {
    return (
        <>
            <dl>
                {data.map((item) => (
                    <AcdList key={item.id} item={item} onView={onView} num={num} cnt={cnt} setCnt={setCnt} />
                ))}
            </dl>
        </>
    );
};

export default Acd;
