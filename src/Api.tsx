import React, { useEffect, useState } from "react";

interface ToDos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export const Api = () => {
    const [data, setData] = useState<ToDos[]>();
    const [filteredList, setfilteredList] = useState<ToDos[]>();
    const [words, setWords] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWords(event.target.value);
    }
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

    // const data = useMemo(() => {
    //     const fetchData = async () => {
    //         let jsonData: ToDos[] = [];
    //         try {
    //             const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //             jsonData = await response.json();
    //         } catch (error) {
    //             console.log("Error fetching data:", error);
    //         }
    //         return jsonData;
    //     };
    //     return fetchData();
    // }, []);

    //const filteredList = useMemo(() => {
    //return data?.filter((item: ToDos) => item.title.includes(words));
    //},[data, words]);
    //useEffect doesnt return any value.

    useEffect(() => {
        const list = data?.filter((item: ToDos) => item.title.includes(words));
        setfilteredList(list);
    }, [data, words])
    return (
        <div>
            <input type="text" value={words} onChange={handleChange} />
            <p>Value: {words}</p>
            {filteredList && <ul>
                {filteredList?.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                    // <li key="1">Item 1</li>
                ))}
            </ul>}
        </div>
    );
}