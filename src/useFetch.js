import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //function fires on every re-render (this includes when we change variables)

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
                setIsLoading(false);
                setError(err.message);
            });

            return () => abortCont.abort();

    }, [url]);

    return { data, isLoading, error};
}

export default useFetch;