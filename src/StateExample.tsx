import { useState } from 'react';
import { Userform } from './UserForm';

export default function Demo() {
    const [count, setCount] = useState<number>(0);
    const [checked, setchecked] = useState<boolean>(false);
    console.log('count', count);
    return (
        <>
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
