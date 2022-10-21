import { Dispatch, SetStateAction, useEffect } from "react";

export const useGetFetch = (url : string, setData : Dispatch<SetStateAction<never[]>>) => {
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export const usePostFetch = async (url : string, data : any) => {
    const response = await fetch(url, {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(data),
    });
    const req = await response.json();
    return req;
};

export const usePatchFetch = async (url : string, data : any) => {
    const response = await fetch(url, {
        method : 'PATCH',
        headers : {'Content-Type': 'application/json'},
        body : data,
    });
    const req = await response.json();
    return req;
};

export const useDeleteFetch = async (url : string, data : any) => {
    const response = await fetch(url, {
        method : 'DELETE',
        headers : {'Content-Type': 'application/json'},
        body : data,
    });
    const req = await response.json();
    return req;
};