import './ProgramItem.scss';
const ProgramItem = ({ item }) => {
    console.log(item);
    const { id, url, desc } = item;
    console.log(url);
    return (
        <>
            <a href="#">
                <li>
                    <em>
                        <img src={url} alt="전통문화/역사교육" />
                    </em>
                    <span>{desc}</span>
                </li>
            </a>
        </>
    );
};

export default ProgramItem;
