import './Header.scss';
import Nav from './Nav';
import Topmenu from './Topmenu';
const Header = () => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <h1>
                        <a href="index.html">
                            <img
                                src="https://adventure.lotteworld.com/common_mus/images/logo.png"
                                alt="로고"
                            />
                        </a>
                    </h1>
                    <Topmenu />
                    <Nav />
                </div>
            </header>
        </>
    );
};

export default Header;
