import { MovieFloat } from '../../styled/MovieStyled';

const MoviePopup = ({
    popupShow,
    title,
    overview,
    original_title,
    popularity,
    release_date,
    poster_path,
    backdrop_path,
    adult,
    vote_average,
    vote_count,
}) => {
    return (
        <MovieFloat>
            {/* <div className={`mv-popup ${popupShow ? 'on' : ''}`}> */}
            <div className="mv-info">
                <h3>{title}</h3>
                <h4>{original_title}</h4>
                <strong>{overview}</strong>
            </div>
            <span>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
            </span>
        </MovieFloat>
    );
};

export default MoviePopup;
