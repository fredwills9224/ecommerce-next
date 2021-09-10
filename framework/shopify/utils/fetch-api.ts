import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

const fetchApi = async <T>( {url, query}: ApiFetcherOptions ): Promise< ApiFetcherResults<T> >=> {

    const res = await fetch(url,{
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })

    });
    
    const { data, errors } = await res.json();
    // if [errors[0].message] is null, or undefined return [errors.message]
        if (errors){
            throw new Error(errors[0].message ?? errors.message);
        };
    // if [errors[0].message] is null, or undefined return [errors.message]

    return { data }
};

export default fetchApi;