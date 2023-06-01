import React, { memo, useMemo, useState } from "react";
import './index.css';

interface IButtonProps {
    onclick: (item: string) => void,
}

export const AddItemButton = memo(({ onclick }: IButtonProps): JSX.Element => {
    const [text, setText] = useState('');
    console.log("I am rendered");
    const addItemToParent = () => {
        onclick(text);
    };
    return (<>
        <div>
            <input
                type="text" name="newItem" value={text}
                onChange={(event) => setText(event.target.value)} />
            <input
                type="button" onClick={addItemToParent} value={"Add"} />
        </div>
    </>)
});


