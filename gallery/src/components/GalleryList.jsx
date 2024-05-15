import GalleryItem from './GalleryItem';

const GalleryList = ({ data, onImg }) => {
    return (
        <ul className="img-list">
            {data.map((item) => (
                <GalleryItem key={item.id} item={item} onImg={onImg} />
            ))}
        </ul>
    );
};

export default GalleryList;
