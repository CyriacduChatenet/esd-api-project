import { useGetFetch } from "@/hooks/useFetch";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IProps {
    children : ReactNode;
};

type Context = {
    categories : never[] | [];
    posts : never[] | [];
};

const dataContext = createContext<Context>({
    categories : [],
    posts : [],
});

export const DataProvider : FC<IProps> = ({children}) => {
    const [categories, setCategories] = useState<never[] | []>([]);
    const [posts, setPosts] = useState<never[] | []>([]);

    useGetFetch('http://localhost:3000/api/v1/category', setCategories);
    useGetFetch('http://localhost:3000/api/v1/post', setPosts);

    return (
        <dataContext.Provider value={{categories, posts}}>
            {children}
        </dataContext.Provider>
    );
};

export const useData = () => useContext<Context>(dataContext);