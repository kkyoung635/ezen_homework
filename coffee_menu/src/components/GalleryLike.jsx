const GalleryLike = ({ data, onLike, nums }) => {
    return (
        <>
            <p className="like-btn">
                <button className={data[nums].isLike ? 'on' : ''} onClick={() => onLike(data[nums].id)}>
                    {/* <button className="on"> */}
                    {/* 나만의 음료 등록<i className="xi-heart-o"></i> */}
                    나만의 음료 등록<i className={data[nums].isLike ? 'xi-heart' : 'xi-heart-o'}></i>
                </button>
            </p>
        </>
    );
};

export default GalleryLike;
