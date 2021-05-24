import React from 'react';
const images=require.context('../../assets/img',true);
export const Header = () => {
    return (
        <header className="header">

           <img src={images(`./logo.png`).default} className="" alt="logo jobu" />

           <div className="header__nav">
                <a href="" className="header__link header__link-active">find job</a>
                <a href="" className="header__link">Company review</a>
                <a href="" className="header__link">Find salaries</a>
           </div>

           <div className="header__profile">
                <a href="" className="header__link header__link-dark">login </a>
                <span className="header__link header__link-dark"> / </span>
                <a href="" className="header__link header__link-dark">register</a>
           </div>
        </header>
    )
}
