import { useState } from 'react';
import { Userform } from './UserForm';

export default function StateExample() {
    const [count, setCount] = useState<number>(0);
    const [checked, setchecked] = useState<boolean>(false);
    console.log('count', count);
    return (
        <>
            <h1>First Example of a state</h1>
            <input type="checkbox" checked={checked} onClick={() => setchecked(!checked)} />
            <div className='tutorial'>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
            <Userform count={count} />
        </>
    );
}
