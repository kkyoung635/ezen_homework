import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <ul className="gnb">
                    <li>
                        <a href="#">이용안내</a>
                    </li>
                    <li>
                        <a href="#">전시</a>
                    </li>
                    <li>
                        <a href="#">교육프로그램</a>
                    </li>
                    <li>
                        <a href="#">소통·소식</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
