import React from 'react'
import Input from '../Input'
import './style.css'
import bg_img from '../../asset/bg_img/istockphoto-893494012-1024x1024 1.png'
import brand_img from '../../asset/band/logo-md.png'
const LoginLayout = ({ handelLogin }) => {
    return (
        <div className="container">
            <div
                className="main-area"
                style={{
                    backgroundImage: `url(${bg_img})`
                }}
            >
                <div className='login-form-container'>
                    <div
                        className='brand-logo-md'
                        style={{
                            backgroundImage: `url(${brand_img})`
                        }}
                    />
                    <div className='login-forms'>
                        <Input
                            label={"USERNAME"}
                            component={<input />}
                        />
                        <Input
                            label={"PASSWORD"}
                            component={<input type='password' />}
                        />
                        <button onClick={handelLogin}>Login</button>
                    </div>
                </div>
            </div>
            <div className="footer-area">
                <span>dhl@20201</span>
            </div>
        </div>
    )
}

export default LoginLayout
