import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';



const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name==="name"){
            setName(value);
        }
        else if(name==="age"){
            setAge(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/display");
    };
    
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name</label>
          <div>
            <input type="text" value={name} onChange={handleChange} name="name" placeholder="Enter Your Name"></input>
          </div>
        </div>
        <div>
            <label htmlFor="age">Favorite age</label>
            <div>
            <input type="number" value={age} onChange={handleChange} name="age" placeholder="Enter Your Age" />
            </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
