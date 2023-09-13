import React, { useState } from "react";


export const NewWork = () => {

    const [visible, setVisible] = useState(true);
    return <div>
        <h1>This is my new work</h1>
        <button onClick={() => setVisible(true)} className="ui button">+</button>
        <button onClick={() => setVisible(false)} className="ui button">-</button>
        {visible && <h2>Divya</h2>}
    </div>;
};
