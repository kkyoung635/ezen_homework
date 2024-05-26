import { useState } from 'react';

export const useInput = (initialState = {}) => {
    const [state, setState] = useState(initialState);
    const changeInput = (e) => {
        const { value, name } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    return { state, changeInput };
};
