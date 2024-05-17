const GalleryTxt = ({ data, nums }) => {
    return (
        <div className="descList">
            <strong>{data[nums].name}</strong>
            <p className="en-name">{data[nums].enName}</p>
            <p className="desc">{data[nums].desc}</p>
            <div className="ing">
                <p>제품 영양 정보</p>
                <em>{data[nums].info}</em>
                <ul>
                    <li>
                        칼로리(kcal)<span>{data[nums].kcal}</span>
                    </li>
                    <li>
                        포화지방(g)<span>{data[nums].lipid}</span>
                    </li>
                    <li>
                        단백질(g)<span>{data[nums].protein}</span>
                    </li>
                    <li>
                        나트륨(mg)<span>{data[nums].salt}</span>
                    </li>
                    <li>
                        당류(g)<span>{data[nums].suger}</span>
                    </li>
                    <li>
                        카페인(mg)<span>{data[nums].cafe}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GalleryTxt;
