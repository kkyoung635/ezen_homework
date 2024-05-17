const GalleryItem = ({ item, onImg }) => {
    const { bigImgurl, name, id } = item;
    return (
        <li>
            <img src={bigImgurl} alt={name} onClick={() => onImg(id)} />
        </li>
    );
};

export default GalleryItem;
