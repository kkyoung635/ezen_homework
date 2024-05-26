import { useState } from 'react';
import MoviePopup from './MoviePopup';

const MovieCard = ({ item, MovieCardLi }) => {
    const { title, original_title, overview, popularity, release_date, poster_path, backdrop_path, adult, vote_average, vote_count } = item;
    const [popupShow, setPopupShow] = useState(false);

    const onPopup = (e) => {
        e.stopPropagation();
        setPopupShow(!popupShow);
    };
    const onClosePopup = () => {
        setPopupShow(false); // 팝업을 숨김
    };

    return (
        <>
            <MovieCardLi onClick={onPopup}>
                {popupShow && <MoviePopup onClick={onClosePopup} {...item} popupShow={popupShow} setPopupShow={setPopupShow} />}
                {popupShow && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
                            zIndex: 1,
                        }}
                        onClick={onClosePopup}
                    />
                )}
                <b>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </b>
                <article>
                    <p className="title">
                        <b style={{ background: adult ? 'red' : '#2f9e19' }}>{adult}ALL</b>
                        <strong>{title}</strong>
                    </p>
                    <em>개봉일 : {release_date}</em>
                    <p className="info">
                        <em>인기도 : {popularity}</em>
                        <i>평점 : {vote_average}</i>
                    </p>
                </article>
            </MovieCardLi>
        </>
    );
};

export default MovieCard;
