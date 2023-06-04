import React, { useCallback, useEffect, useState } from "react";
import { SearchBox } from "./Searchbox";

interface ToDos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export const ToDoListComponent = () => {
    //humesha useState ko type dena chaiye 
    //example <TOdos[]> isse usko pata chal jayega ki kaise type lene hai.
    const [data, setData] = useState<ToDos[]>();
    const [filteredList, setfilteredList] = useState<ToDos[]>();
    const [words, setWords] = useState<string>("");

    const handleChange = useCallback((newValue: string) => {
        setWords(newValue);
    }, []);
    //ismai 2 useEffect hai and 1st wala ek hi baar chlega call marne pe kyuki
    //uske ander dependency hi nahi hai.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const jsonData: ToDos[] = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    //ye 2nd wale useEffect ko humne list ko filter karane ke liye liya hai
    //ismai 2 dependencies hai data and words.
    useEffect(() => {
        const list = data?.filter((item: ToDos) => item.title.includes(words));
        setfilteredList(list);
    }, [data, words]);

    return (
        <div>
            <h1>Filter ToDos based on the Text</h1>
            <SearchBox onChange={handleChange} />
            {filteredList &&
                // <select id="todos">
                //     {filteredList?.map((item) => (
                //         <option value={item.id}>{item.title}</option>
                //         // <option value="volvo">Volvo</option>
                //     ))}
                // </select>
                <ul>
                    {filteredList?.map((item) => (
                        <li key={item.id}>{item.title}</li>
                        // <li key="1">Item 1</li>
                    ))}
                </ul>
            }
        </div>
    );
}