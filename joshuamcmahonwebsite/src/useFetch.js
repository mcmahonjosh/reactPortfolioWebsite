import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //function fires on every re-render (this includes when we change variables)
        fetch(url)
            .then(res => {
               if(!res.ok) {
                throw Error('could not fetch data for that resource');
               }
               return res.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, [url]);

    return { data, isLoading, error};
}

export default useFetch;