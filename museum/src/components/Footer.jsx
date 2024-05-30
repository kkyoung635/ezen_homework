import './Footer.scss';
const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <p>
                        <a href="#">롯데월드 소개</a>
                        <a href="#">기업 제휴 및 입점 문의</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                        <a href="#">사이트맵</a>
                    </p>
                    <p>
                        <span>서울특별시 송파구 올림픽로 240 호텔롯데 롯데월드</span>
                        <span>대표자 : 최홍훈</span>
                    </p>
                    <p>
                        <span>사업자등록번호 : 219-85-00014</span>
                        <span>통신판매업신고번호 : 송파 제5513호</span>
                        <span>전화 : 1661-2000</span>
                    </p>
                    <p className="copy">COPYRIGHT 2018 LOTTEWORLD. ALL RIGHTS RESERVED.</p>

                    <div className="family">
                        <p className="title">
                            <a href="#">계열사 관련 사이트</a>
                        </p>
                        {/* <ul>
                            <li>
                                <a href="#">롯데백화점</a>
                            </li>
                            <li>
                                <a href="#">롯데웰푸드</a>
                            </li>
                            <li>
                                <a href="#">롯데렌탈</a>
                            </li>
                            <li>
                                <a href="#">롯데마트</a>
                            </li>
                            <li>
                                <a href="#">롯데슈퍼</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
