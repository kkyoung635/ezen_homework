import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <ul className="gnb">
                    <li>
                        <a href="info1.html">이용안내</a>
                    </li>
                    <li>
                        <a href="exh1.html">전시</a>
                    </li>
                    <li>
                        <a href="edu1.html">교육프로그램</a>
                    </li>
                    <li>
                        <a href="news1.html">소통·소식</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
