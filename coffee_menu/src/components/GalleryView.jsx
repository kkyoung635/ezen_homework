import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const GalleryView = ({ data, onImg, nums }) => {
    return (
        <>
            <article className="big-view">
                <GalleryBig nums={nums} data={data} />
                <div className="menus">
                    <GalleryList data={data} onImg={onImg} />
                </div>
            </article>
        </>
    );
};

export default GalleryView;
