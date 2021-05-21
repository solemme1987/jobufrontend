import React, { useState } from 'react';
import { Login } from '../Login';
import { Register } from '../Register';



export const LoginScreen = () => {


 const [toggle, setToggle] = useState(true);


    return (
        <div className= "auth__main">
            <div className="auth__input-container">
                 <Login  toggle={toggle} setToggle={setToggle} />

                 <Register toggle={toggle} setToggle={setToggle} />
            </div>

            <div className="auth__poster-container">
                 {/* <div className="auth__poster-colums">
                        <div className="auth__poster-child"></div>
                        <div className="auth__poster-child"></div>
                        <div className="auth__poster-child"></div>
                    </div>

        <       img src={logo(`./home.png`).default} className="auth__poster-img" alt="logo jobu" />


                    <div className="auth__poster-colums">
                        <div className="auth__poster-child"></div>
                        <div className="auth__poster-child"></div>
                        <div className="auth__poster-child"></div>
                    </div> */}
            </div>

        </div>
    )
}


