import React, { useMemo, useState } from "react";

let cartItems: string[] = [
    "Dress", "Perfume",
    "Lipstick", "Band", "Milk"
]

export const ShoppingList = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState<string[]>(cartItems);

    const itemsCount = useMemo(() => {
        return list.length
    }, [list]);

    const listItems = useMemo(() => {
        return list.map((item, index) => {
            return <li key={index}>{item}</li>;
        })
    }, [list]);

    const clicked = (event: any) => {
        const newArray = [...list, text];
        setList(newArray);
    };
    return (<>
        <div>
            <input
                type="text" name="newItem" value={text}
                onChange={(event) => setText(event.target.value)} />
            <input
                type="button"
                onClick={clicked} value={"Add"} />
        </div>
        <h2>Shopping List ({itemsCount})</h2>
        <ul>{listItems}</ul>
    </>)
}







