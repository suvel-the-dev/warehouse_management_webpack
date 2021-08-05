import React from 'react'
import './style.css'
import spinner_icon from '../../asset/band/logo.png'
const Spinner = () => {
    return (
        <div className='spinner__bg'>
            <div
                className="spinner"
                style={{
                    backgroundImage: `url(${spinner_icon})`
                }}
            >
            </div>
            <strong>Warehouse is being rendered, please wait...</strong>
        </div>
    )
}

export default Spinner
