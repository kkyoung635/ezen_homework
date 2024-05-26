import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.results);
                setLoading(true);
                setError(null);
                console.log(res);
            })
            .catch((error) => {
                setData([]);
                setLoading(true);
                setError('PAGE NOT FOUND');
            });
    }, [data]);
    return { data, loading, error };
};
