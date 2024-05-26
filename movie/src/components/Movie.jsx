import { MovieWrap } from '../styled/MovieStyled';

import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieInput from './convers/MovieInput';
import MovieSearch from './convers/MovieSearch';
import MovieList from './posters/MovieList';
import MoviePopup from './posters/MoviePopup';

const Movie = () => {
    // 원본 유지
    const [originMv, setOriginMv] = useState([]);

    // 수정 데이터는 copyMv로..
    const [copyMv, setCopyMv] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isShow, setIsShow] = useState(false);

    // 비동기 데이터
    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU0OGUyYjdmNGE0MTQxMDBjMDJkZDQwMGMxMjUwMyIsInN1YiI6IjY2NGVkYmY2NDY2NzQ0MGY4OTM0ZDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kb95XzB_i2s8bOO9C3_bkdgQ5UCVAqUeGcjG-V_KTXs',
                },
            };
            try {
                const API_KEY = 'bd548e2b7f4a414100c02dd400c12503';

                const nowUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`;
                const upUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR`;

                const resUp = await axios.get(upUrl, options);
                const resNow = await axios.get(nowUrl, options);

                const mvData = [...resUp.data.results, ...resNow.data.results].reduce((acc, current) => {
                    const x = acc.find((item) => item.id === current.id);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                setOriginMv(mvData);
                setCopyMv(mvData);

                setLoading(false);
                setError(null);
            } catch (error) {
                setCopyMv([]);
                setLoading(false);
                setError('page not found');
            }
        };

        getData();
    }, []);

    const searchMv = (word) => {
        if (!word || word.trim() === '') return;
        const searchMv = [...originMv].filter((item) => item.title.indexOf(word) !== -1);
        setCopyMv(searchMv);
        setIsShow(false);
    };

    const onCate = (tabs) => {
        const today = new Date().toISOString().split('T')[0];

        if (tabs === 'all' || tabs === false) {
            setCopyMv(originMv);
            setIsShow(false);
        } else if (tabs === 'ongoing' || tabs === true) {
            const ongoingMovies = originMv.filter((movie) => new Date(movie.release_date) <= new Date(today));
            setCopyMv(ongoingMovies);
            setIsShow(true);
        } else if (tabs === 'coming') {
            const comingMovies = originMv.filter((movie) => new Date(movie.release_date) > new Date(today));
            setCopyMv(comingMovies);
            setIsShow(false);
        }
    };

    const changeOption = (e) => {
        const { value } = e.target;
        setCopyMv([...originMv].sort((a, b) => b[value] - a[value]));
        setIsShow(false);
    };

    return (
        <MovieWrap>
            <MovieInput searchMv={searchMv} />
            <MovieSearch onCate={onCate} changeOption={changeOption} />
            <MovieList copyMv={copyMv} onCate={onCate} isShow={isShow} setIsShow={setIsShow} />
        </MovieWrap>
    );
};

export default Movie;

// const upKey = await Promise.all(
//     resUp.data.results.map(async (movie) => {
//         const resUpKey = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/keywords?api_key=${API_KEY}`);
//         return {
//             ...movie,
//             keywords: resUpKey.data.keywords,
//         };
//     })
// );
// const nowKey = await Promise.all(
//     resUp.data.results.map(async (movie) => {
//         const resUpKey = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/keywords?api_key=${API_KEY}`);
//         return {
//             ...movie,
//             keywords: resUpKey.data.keywords,
//         };
//     })
// );
// setMv([...resNow.data.results, ...resUp.data.results]);
// setMv([...upKey, ...nowKey]);
