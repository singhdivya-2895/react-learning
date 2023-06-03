import React, { memo } from "react";
//ye jo props hai wo parents se jo chahiye wo hai.
//this is like a syntax ese hi karte hai.
//and then we use them in our code jaise hume karna hai .
interface SearchBoxProps {
    onChange: (value: string) => void;
}
//using React.memo we wrapped our code so that in 
//stop again again rerenderind and saving the state.
export const SearchBox = React.memo(({ onChange }: SearchBoxProps): JSX.Element => {
    const childOnChange = (event: any) => {
        const newValue = event.target.value;
        onChange(newValue);
    }
    console.log("I am rendered");
    return (
        <div>
            <input type="text" onChange={childOnChange} />
        </div>)
});
