import React from 'react'
const images=require.context('../../assets/img',true);
export const Search = () => {
    return (
        <div className="searchContent">
             <div className="searchContent__searchBar">
                  {/* <form action="" className="serchContent__form"> */}

                     <div className="searchContent__formGroup">
                         <label className="searchContent__icon">
                           <img src={images(`./lupa.png`).default} className="" alt="lupa" />
                         </label>
                         <input type="text" className="searchContent__input searchContent__input-keyword " placeholder="Key Words"/>
                     </div>

                     <div className="searchContent__formGroup">
                         <label className="searchContent__icon">
                           <img src={images(`./marker.png`).default} className="" alt="lupa" />
                         </label>
                         <input type="text" className="searchContent__input" placeholder="Buenaventura, VC"/>
                     </div>

                     <div className="searchContent__formGroup">
                         <label className="searchContent__icon">
                           <img src={images(`./maletin.png`).default} className="" alt="lupa" />
                         </label>
                         <input type="text" className="searchContent__input" placeholder="Job Type"/>
                     </div>

                     <div className="searchContent__formGroup">
                         <label className="searchContent__icon">
                           <img src={images(`./dolar.png`).default} className="" alt="lupa" />
                         </label>
                         <input type="text" className="searchContent__input searchContent__input-end" placeholder="Salary Range"/>
                         <button className="searchContent__button">Find Job</button>
                     </div>
                     
                       
                        
                     
                     
                  {/* </form> */}
             </div>
        </div>
    )
}
