const GalleryBig = ({ data, nums }) => {
    return (
        <div className="big-img">
            <h2>
                {data[nums].drinkType} - {data[nums].name}
            </h2>
            <span>
                <img src={data[nums].bigImgurl} alt="사진이름" />
            </span>
        </div>
    );
};

export default GalleryBig;
