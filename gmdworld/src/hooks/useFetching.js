import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(0);
    const [error, setError] = useState('');

    const fetching = async () => {
        try{
            setIsLoading(1);
            await callback()
        }catch(e){
            setError(e.message);
        }finally{
            setIsLoading(0);
        }
    }

    return [fetching, isLoading, error];
}