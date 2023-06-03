import React, { memo, useState } from "react";
import './index.css';
// demonstrates passing a function as a prop to a child component 
//IButtonProps interface defines the shape of the props that AddItemButton expects. 
//It specifies a prop called onclick that is a function taking a string
// parameter and returning void (no return value).
interface IButtonProps {
    parentMethod: (item: string) => void,
}

export const AddItemButton = memo(({ parentMethod }: IButtonProps): JSX.Element => {
    const [text, setText] = useState('');
    console.log("I am rendered");

    const addItemToParent = () => {
        parentMethod(text);
        setText('');
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


