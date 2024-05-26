import { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { MovieContainer, MovieCardLi } from '../../styled/MovieStyled';

const MovieList = ({ copyMv, onCate, isShow, setIsShow, setPopupShow, popupShow }) => {
    const toggle = () => {
        setIsShow(!isShow);
        onCate(!isShow);
    };
    return (
        <>
            <MovieContainer>
                <p className="toggle">
                    <em>상영작</em>
                    <em>
                        <span onClick={toggle} className={isShow ? 'on' : ''}>
                            {' '}
                        </span>
                        {copyMv.length}개
                    </em>
                    의 영화가 검색되었습니다.
                </p>
                <ul>
                    {copyMv.map((item, idx) => (
                        <MovieCard key={idx} item={item} MovieCardLi={MovieCardLi} setPopupShow={setPopupShow} popupShow={popupShow} />
                    ))}
                </ul>
            </MovieContainer>
        </>
    );
};

export default MovieList;
