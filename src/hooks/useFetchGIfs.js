import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        const getImages = async () => {
            const gifs = await getGifs(category);
            setState({
                ...state,
                data: gifs,
                loading: false,
            });
        }
        getImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return state;
}