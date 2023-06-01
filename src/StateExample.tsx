import { useState } from 'react';
import { Userform } from './UserForm';

export default function Demo() {
    const [count, setCount] = useState<number>(0);
    console.log('count', count);
    return (
        <>
            <div className='tutorial'>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
            <Userform count={count} />
        </>
    );
}
