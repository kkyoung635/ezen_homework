import ImgThum from './ImgThum';

const ImgView = ({ data, dataNum, onView, num, setCnt, cnt }) => {
    const { id, title, brand, logoUrl, imgurl } = dataNum;
    return (
        <div className="img-view">
            <h1>
                <img src={logoUrl} alt={brand} />
            </h1>
            <em>
                {id}/{data.length}
            </em>
            <ImgThum data={data} imgurl={imgurl} onView={onView} num={num} cnt={cnt} setCnt={setCnt} />
        </div>
    );
};

export default ImgView;
