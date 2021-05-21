import React, { useState } from 'react';
  const logo=require.context('../assets/img',true);
export const Register = ({toggle, setToggle}) => {

 const [companyAllow, setCompanyAllow] = useState(true);

 const allow={
    ca:"auth__main-input auth__main-input--register",
    cd:"auth__main-input auth__main-input--register disabled",
    la:"auth__main-label ",
    ld:"auth__main-label disabled"
 };
 
 let inputAllo="disabled";


    const switchForm=()=>{
        setToggle((tog)=>tog=true);
    };

    const toggleCompany=()=>{
        setCompanyAllow(!companyAllow);
    };

    return (
        
      
                <div className= {toggle? "auth__main-contentLeft hidden" :"auth__main-contentLeft show" } >
                   <div className="auth__main-header">
                        <div>
                            <h2 className="auth__main-title">Sign Up</h2>
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
                        <span className="auth__main-textLine">or Sing un whit Email</span>
                        <div className="auth__main-lineRight"></div>
                    </div>

                    <form action="">

                       <div className="auth__main-formGroup">
                           <div className="auth__main-itemGroup">
                              <label className="auth__main-label" htmlFor="registerName">Name<span className="auth__main-required"> *</span></label>
                              <input className="auth__main-input auth__main-input--register" type="text" id="registerName" placeholder="Jhon Doe" required/>
                           </div>

                           <div className="auth__main-itemGroup">
                              <label className="auth__main-label" htmlFor="registerEmail">Email<span className="auth__main-required"> *</span></label>
                              <input className="auth__main-input auth__main-input--register" type="text" id="registerEmail" placeholder="mail@gmail.com" required/>
                           </div>
                        </div>

                        <div className="auth__main-formGroup">
                           <div className="auth__main-itemGroup">
                              <label className="auth__main-label" htmlFor="registerCountry">Country<span className="auth__main-required"> *</span></label>
                              <select className="auth__main-input auth__main-input--register"  id="registerCountry" required>
                                <option value="">Colombia</option>
                                <option value="">Venezuela</option>
                                <option value="">Brasil</option>
                              </select>
                           </div>

                           <div className="auth__main-itemGroup">
                              <label className={companyAllow? allow.ld: allow.la} htmlFor="registerCompany">Company</label>
                              <input readOnly={companyAllow} className={companyAllow? allow.cd: allow.ca} type="text" id="registerCompany" placeholder="Company name"/>
                           </div>
                        </div>

                        <div className="auth__main-formGroup">
                            <div className="auth__main-itemGroup">
                              <label className="auth__main-label" htmlFor="loginEmail">Password<span className="auth__main-required"> *</span></label>
                              <input className="auth__main-input auth__main-input--register" type="password" id="loginEmail" placeholder="****************" required/>
                           </div>
                           
                           <div className="auth__main-itemGroup">
                              <label className="auth__main-label " htmlFor="loginEmail">Repeat Password<span className="auth__main-required"> *</span></label>
                              <input className="auth__main-input auth__main-input--register" type="password" id="loginEmail" placeholder="****************" required/>
                           </div>
                        </div>

                        {/* Checkbox remember me */}
                        <div className="auth__main-contentCheckBox">
                            <div className="auth__main-child">
                                <input type="checkbox" className="auth_main-checkbox" id="terms" />
                                <label htmlFor="terms" className="auth__main-label">
                                    <a className="auth__main-link pointer" href="#policy" target="_blank" rel="noopener noreferrer">
                                       Acept terms
                                    </a>
                                </label>
                            </div>
                            <div className="auth__main-child">
                                <input 
                                    type="checkbox" 
                                    className="auth_main-checkbox" 
                                    id="terms"
                                     onChange={toggleCompany}
                                 />
                                <label htmlFor="terms" className="auth__main-label">
                                  I am a Recruiter
                                </label>
                            </div>
                        </div>


                        <button className="button  button--primary pointer button--login ">
                           <span className="button__text">Sign Up</span>
                        </button>

                        <div className="auth__main-child auth__main-child--m3 ">
                            <label htmlFor="terms" className="auth__main-label">
                                Have an account?
                            <span className="auth__main-link pointer" onClick={switchForm}> Login </span>
                            </label>
                        </div>


                    </form>
                </div>
        

    )
}
