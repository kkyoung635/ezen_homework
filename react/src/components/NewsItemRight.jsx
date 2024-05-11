import './NewsItemRight.scss';
const NewsItemRight = () => {
    return (
        <>
            <div className="art right">
                <a href="#" className="link">
                    <img
                        src="https://adventure.lotteworld.com/common_mus/images/icon/mainCon3_util1_img1.png"
                        alt="이용 문의"
                    />
                    <p>이용 문의</p>
                </a>
                <a href="#" className="link">
                    <img
                        src="https://adventure.lotteworld.com/common_mus/images/icon/mainCon3_util1_img2.png"
                        alt="오시는 길"
                    />
                    <p>오시는 길</p>
                </a>
                <div className="link-banner">
                    <p>
                        우리 고유의 옛멋과 <br />
                        품격을 선도합니다
                    </p>
                    <a href="#" className="more">
                        전통혼례 바로가기<i className="xi-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default NewsItemRight;
