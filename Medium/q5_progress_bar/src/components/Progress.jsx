import React from 'react'
import './Progress.css'

const Progress = () => {
    return (
        <div>
            <h1>Progess Bar</h1>

            <div className='container'>
                <div className ='progress-bar'></div>
            </div>
            <span className='input'>Input Percentage : <input type="number" /></span>
        </div>
    )
}

export default Progress;