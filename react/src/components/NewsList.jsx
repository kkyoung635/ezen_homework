import NewsItemLeft from './NewsItemLeft';
import NewsItemRight from './NewsItemRight';
import './NewsList.scss';
const NewsList = () => {
    return (
        <>
            <article>
                <NewsItemLeft />
                <NewsItemRight />
            </article>
        </>
    );
};

export default NewsList;
