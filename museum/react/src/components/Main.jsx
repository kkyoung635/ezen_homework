import Exhibition from './exhibition/Exhibition';
import News from './news/News';
import Program from './program/Program';
import TimeBar from './timebar/TimeBar';
// import './Main.scss';

const Main = () => {
    return (
        <>
            <main id="container" className="main">
                <section id="content">
                    <TimeBar />
                    <Exhibition />
                    <Program />
                    <News />
                </section>
            </main>
        </>
    );
};

export default Main;
