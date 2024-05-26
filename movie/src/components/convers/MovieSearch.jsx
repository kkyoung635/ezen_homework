import { MovieButton } from '../../styled/MovieStyled';
const MovieSearch = ({ onCate, changeOption }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onCate();
    };
    return (
        <MovieButton onSubmit={onSubmit}>
            <p>
                <button type="submit" onClick={() => onCate('all')}>
                    전체
                </button>
                <button type="submit" onClick={() => onCate('ongoing')}>
                    상영중
                </button>
                <button type="submit" onClick={() => onCate('coming')}>
                    상영예정
                </button>
            </p>
            <p>
                <select name="options" onChange={changeOption}>
                    <option value="">정렬</option>
                    <option value="popularity">인기순</option>
                    <option value="vote_average">평점순</option>
                    <option value="release_date">개봉일순</option>
                </select>
            </p>
        </MovieButton>
    );
};

export default MovieSearch;
