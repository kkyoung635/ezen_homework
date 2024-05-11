import NewsList from './NewsList';

const News = () => {
    return (
        <>
            <div className="con-box box4">
                <div className="inner">
                    <h2>민속박물관 소식을 한눈에!</h2>
                    <p>오늘의 민속박물관 소식을 만나보세요.</p>
                    <NewsList />
                </div>
            </div>
        </>
    );
};

export default News;
