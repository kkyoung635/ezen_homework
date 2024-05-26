import { useEffect, useRef, useState } from 'react';
import { MovieSearch } from '../../styled/MovieStyled';

const MovieInput = ({ searchMv }) => {
    const nullRef = useRef(null);

    const [form, setForm] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('form'));
        return saved || { id: 1, word: '', recentSearches: [] };
    });
    const { word } = form;

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
    }, [form]);

    const changeInput = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // if (!word.trim()) return;

        const trimmedWord = form.word.trim();
        if (!trimmedWord) return;

        searchMv(word);
        form.word = '';
        nullRef.current.focus();
        // const updateWords = [word, ...form.recentSearches.filter((item) => item !== form.word)];
        // setForm({
        //     ...form,
        //     recentSearches: updateWords,
        // });
        if (!form.recentSearches.includes(trimmedWord)) {
            const updatedSearches = [trimmedWord, ...form.recentSearches];
            setForm({
                ...form,
                word: '',
                recentSearches: updatedSearches,
            });
        }
    };

    const onSearchDel = (word) => {
        const updatedSearches = form.recentSearches.filter((item) => item !== word);
        setForm({
            ...form,
            recentSearches: updatedSearches,
        });
    };
    const searchReset = () => {
        setForm({ ...form, recentSearches: [] });
    };
    return (
        <MovieSearch onSubmit={onSubmit}>
            <p>
                <input type="text" name="word" value={word} onChange={changeInput} ref={nullRef} placeholder="영화를 검색하세요." />
                <button type="submit">검색</button>
            </p>
            <div>
                <h3>{form.recentSearches.length ? <span onClick={searchReset}>전체삭제</span> : ''}</h3>
                <ul>
                    {form.recentSearches.map((search, index) => (
                        <li key={index}>
                            <span onClick={() => setForm({ ...form, word: search })}>{search}</span>
                            <button onClick={() => onSearchDel(search)}>
                                <i className="xi-close"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </MovieSearch>
    );
};

export default MovieInput;
