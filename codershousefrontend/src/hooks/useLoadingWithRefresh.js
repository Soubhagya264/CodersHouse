import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';
export function useLoadingWithRefresh() {
    const [loading, setLoading] = useState(false);
    useEffect(
        () => {
            (async () => {
                try {
                    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
                        withCredentials: true
                    })
                } catch (err) {
                    console.log(err);
                    setLoading(false);
                }
                dispatch(setAuth(data));
                setLoading(false);

            })();
        },
        []

    )
    return {loading}
}