import React, {useState} from 'react';

const Show = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={(e)=>setShow((show)=> !show)}>Show/Hide</button>
            {show ? <h1>Welcome To React Challenge</h1> : null}
        </div>
    )
}

export default Show;