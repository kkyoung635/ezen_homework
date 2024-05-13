import './NewsItemLeft.scss';
const NewsItemLeft = () => {
    return (
        <>
            <div className="art left">
                <strong className="news">민속박물관 소식</strong>
                <span className="more">
                    더보기<i className="xi-plus-circle"></i>
                </span>
                <p className="sub-news">
                    <a href="#">
                        {`[`}롯데월드X제로월드{`]`} 두번째 방탈출 {`<`}바람,우리는 그저 바람이었소
                        {`>`} 오픈
                    </a>
                </p>
                <p className="date">2022.11.09</p>
                <ul>
                    <li>
                        <a href="#">
                            {`[`}롯데월드X플레이더월드{`]`} 모바일 방탈출 {`<`}화연 : 조선 최고의
                            소리꾼{`>`}
                        </a>
                        <span className="date">2022.02.22</span>
                    </li>
                    <li>
                        <a href="#">
                            {`[`}롯데월드X제로월드{`]`} 방탈출 {`<`}아랑 餓浪 : 굶주린 이리{`>`}
                        </a>
                        <span className="date">2021.10.21</span>
                    </li>
                    <li>
                        <a href="#">민속박물관 주차 변경 안내</a>
                        <span className="date">2021.06.16</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NewsItemLeft;
