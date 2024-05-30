import './ExhibitionItem.scss';
const ExhibitionItem = ({ item }) => {
    const { id, url, desc } = item;
    return (
        <>
            <li>
                <a href="#">
                    <strong>{desc}</strong>
                    <span>
                        <img src={url} alt={desc} />
                    </span>
                </a>
            </li>
        </>
    );
};

export default ExhibitionItem;
