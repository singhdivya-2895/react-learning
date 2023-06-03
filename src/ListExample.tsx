import React, { useCallback, useMemo, useState } from "react";
import './index.css';
import { AddItemButton } from "./AddItemButton";

let cartItems: string[] = [
    "Dress", "Perfume",
    "Lipstick", "Band", "Milk"
]

export const ShoppingList = () => {
    const [list, setList] = useState<string[]>(cartItems);
    const [checked, setchecked] = useState<boolean>(false);

    const itemsCount = useMemo(() => {
        return list.length
    }, [list]);

    const listItems = useMemo(() => {
        return list.map((item, index) => {
            return <li key={index}>{item}</li>;
        })
    }, [list]);

    const saveItem = useCallback((newItem: string) => {
        const newArray = [...list, newItem];
        setList(newArray);
    }, [list]);

    return (<>
        <input type="checkbox" checked={checked} onClick={() => setchecked(!checked)} />
        <AddItemButton parentMethod={saveItem} />
        <h2>Shopping List ({itemsCount})</h2>
        <ul>{listItems}</ul>
    </>)
}

