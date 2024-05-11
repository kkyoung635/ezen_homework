import Exhibition from './Exhibition';
import News from './News';
import Program from './Program';
import TimeBar from './TimeBar';
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
