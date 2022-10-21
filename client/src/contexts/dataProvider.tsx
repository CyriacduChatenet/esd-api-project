import { useGetFetch } from "@/hooks/useFetch";
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

interface IProps {
    children : ReactNode;
};

type Context = {
    categories : never[] | [];
    posts : never[] | [];
    setPosts : any;
};

const dataContext = createContext<Context>({
    categories : [],
    posts : [],
    setPosts : () => {},
});

export const DataProvider : FC<IProps> = ({children}) => {
    const [categories, setCategories] = useState<never[] | []>([]);
    const [posts, setPosts] = useState<never[] | []>([]);

    useGetFetch('http://localhost:3000/api/v1/category', setCategories);
    useGetFetch('http://localhost:3000/api/v1/post', setPosts);

    return (
        <dataContext.Provider value={{categories, posts, setPosts}}>
            {children}
        </dataContext.Provider>
    );
};

export const useData = () => useContext<Context>(dataContext);