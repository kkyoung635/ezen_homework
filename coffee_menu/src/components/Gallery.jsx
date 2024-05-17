import GalleryTxt from './GalleryTxt';
import GalleryView from './GalleryView';
import galleryData from '../assets/galleryData.js';
import './reset.css';
import './Gallery.scss';
import { useRef, useState } from 'react';
import GalleryLike from './GalleryLike.jsx';

const Gallery = () => {
    const [data, setData] = useState(galleryData);
    const [nums, setNum] = useState(0);

    const onImg = (id) => {
        setNum(id - 1);
    };
    const onLike = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isLike: !item.isLike } : item)));
    };

    return (
        <div className="wrap">
            <div className="inner">
                <GalleryView data={data} onImg={onImg} nums={nums} />
                <GalleryTxt data={data} nums={nums} />
                <GalleryLike data={data} onLike={onLike} nums={nums} />
            </div>
        </div>
    );
};

export default Gallery;
