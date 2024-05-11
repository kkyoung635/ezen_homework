import './assets/css/reset.css';
import './assets/css/main.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Visual from './components/Visual';

const App = () => {
    return (
        <>
            <p id="sikpNav" className="blind">
                <a href="#content">본문 바로가기</a>
            </p>
            <div className="warp">
                <Header />
                <Visual />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;
