import React from 'react'
const logo=require.context('../assets/img',true);

export const Login = ({toggle,setToggle}) => {

    console.log(toggle);
    const switchForm=()=>{
        setToggle((tog)=>tog=false);
    };

    return (
        
        <div className={toggle? "auth__main-contentLeft show" :"auth__main-contentLeft hidden" } >
            <div className="auth__main-header">
                <div>
                    <h2 className="auth__main-title">Login</h2>
                    <p className="auth__main-text">Get with us the job of your dreams!</p>
                </div>
                <img src={logo(`./icon.png`).default} className="auth__main-img" alt="logo jobu" />

            </div>
            <button className="button button--border pointer">
                <img src={logo(`./iconG.png`).default}  alt="logo google" />
                <span className="button__text">Sign in with Google</span>
            </button>
            <div className="auth__main-lines">
                <div className="auth__main-lineLeft"></div>
                <span className="auth__main-textLine">or Sing in whit Email</span>
                <div className="auth__main-lineRight"></div>
            </div>

            <form action="">
                <label className="auth__main-label" htmlFor="loginEmail">Email<span className="auth__main-required">*</span></label>
                <input className="auth__main-input" type="text" id="loginEmail" placeholder="mail@gmail.com" required/>
            
                <label className="auth__main-label" htmlFor="loginEmail">Password<span className="auth__main-required">*</span></label>
                <input className="auth__main-input" type="password" id="loginEmail" placeholder="****************" required/>

                {/* Checkbox remember me */}
                <div className="auth__main-contentCheckBox">
                    <div className="auth__main-child">
                        <input type="checkbox" className="auth_main-checkbox" id="terms" />
                        <label htmlFor="terms" className="auth__main-label">Remember me</label>
                    </div>
                    <div className="auth__main-child">
                        <a className="auth__main-link pointer" href="#nada"  target="_blank" rel="noopener noreferrer"> Forget Password?</a>
                    </div>
                </div>


                <button className="button  button--primary pointer button--login ">
                <span className="button__text">Login</span>
            </button>
            
            <div className="auth__main-child auth__main-child--m3 ">
                <label htmlFor="terms" className="auth__main-label">
                    Not Registerd yet?
                   <span className="auth__main-link pointer" onClick={switchForm}> Create an Account</span>
                </label>
            </div>
            

            </form>
        </div>

    )
}
