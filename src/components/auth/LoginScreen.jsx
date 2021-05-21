import React, { useState } from 'react';
import { Login } from '../Login';
import { Register } from '../Register';
const img=require.context('../../assets/img',true);


export const LoginScreen = () => {


 const [toggle, setToggle] = useState(true);


    return (
        <div className= "auth__main">
            <div className="auth__input-container">
                 <Login  toggle={toggle} setToggle={setToggle} />

                 <Register toggle={toggle} setToggle={setToggle} />
            </div>

            <div className="auth__poster-container">

                {/* STAIRS TOP */}
                <div className="auth__poster-stairsCotainer">
                     <div className="auth__poster-stairs">

                     </div>
                </div>
                <div className="auth__poster-stairsCotainer">
                     <div className="auth__poster-stairs">

                     </div>
                </div>

                 <img src={img(`./candidates.svg`).default} className="auth__poster-img" alt="poster" />
                 <div className="auth__poster-circleParent">
                    <div className="auth__poster-circleChild">

                    </div>
                 </div>

                 <h2 className="auth__post-title">Lorem ipsum dolor sit amet consec.</h2>
                 <p className="auth__post-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit, Accusamus.</p>
                 
            </div>

        </div>
    )
}


