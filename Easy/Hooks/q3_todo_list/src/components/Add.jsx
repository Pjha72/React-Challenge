import React, {useState} from 'react';

const Add = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    function handleAdd(e){
        e.preventDefault();
        setList([...list, input]);
    }
    const handlDelete=(id)=>{
        const newList = list.filter((item, index)=>index !== id);
        setList(newList);
    }
    return (
        <div>
            <h1>To-do List</h1>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <div>
                <h2>My To Do List</h2>
                <ul>
                    {
                        list.map((item, index)=>{
                            return <li key={index}>{item}<button onClick={()=>handlDelete(index)}>X</button></li>
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Add;