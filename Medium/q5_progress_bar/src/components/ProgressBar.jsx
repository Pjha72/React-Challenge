import React from "react";
import "./Progress.css";

const ProgressBar = ({width: inputWidth}) => {
    return (
        <div>
            <div className="container">
                {inputWidth >=0 && inputWidth <= 100 ?(
                    <div className="progress-bar" style={{width: `${inputWidth}%`}}>
                        {inputWidth}%
                    </div>
                ) :(
                    alert("Please enter a value between 0 and 100")
                ) }
                
            </div>
        </div>
    )
}
export default ProgressBar;