import React from 'react'
import { Card } from './Card';
import { SortBy } from './SortBy';
const images=require.context('../../assets/img',true);
export const Main = () => {
    return (
        <main className="main">
            <div className="main__content">
                <aside className="main__sidebar">

                    {/* CREATE ALERT  */}
                  <div className="main__sideItem">
                     <h2 className="main__sideItemTitle">Create Job Alert</h2>
                     <p className="main__sideItemText">Create a job alert now and never miss a job</p>
                     <input type="text" name="" className="main__sideInput" placeholder="Enter a Job keyword"/>
                     <button className="main__sideButton">Create a Job Alert</button>
                  </div>

                     {/* PRIMER GRUPO DE FILTRO POR TYPO DE EMPLEO */}
                  <div className="main__sideFilter">
                    <div className="main__filterGroup">
                        <div className="main__groupFilterTittle">
                            <h2 className="main__filterTittle">Type of Employment</h2>
                            <span>
                              <img src={images(`./up.png`).default} className="" alt="lupa" />
                            </span>
                        </div>
                        
                        {/* lISTA DE FILTROS  */}
                        <div className="main__filterGroupList">
                            <ul className="main__filterList">
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Full Time Jobs</label>
                                  <span className="main__filterCount">
                                      56
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Part Time Jobs</label>
                                  <span className="main__filterCount">
                                      34
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Remote Jobs</label>
                                  <span className="main__filterCount">
                                      24
                                  </span>
                                </li><li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Internship Jobs</label>
                                  <span className="main__filterCount">
                                      27
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Training Jobs</label>
                                  <span className="main__filterCount">
                                      76
                                  </span>
                                </li>
                                
                            </ul>
                        </div>
                   
                   
                    </div>
                    
                </div>

                     {/* SEGUNDOGRUPO DE FILTRO POR TYPO DE EMPLEO */}
                  <div className="main__sideFilter">
                    <div className="main__filterGroup">

                        <div className="main__groupFilterTittle">
                            <h2 className="main__filterTittle">Seniority Level</h2>
                            <span>
                              <img src={images(`./up.png`).default} className="" alt="lupa" />
                            </span>
                        </div>
                        
                        {/* lISTA DE FILTROS  */}
                        <div className="main__filterGroupList">
                            <ul className="main__filterList">
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Student Level</label>
                                  <span className="main__filterCount">
                                      98
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Entry Level</label>
                                  <span className="main__filterCount">
                                      44
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Senior Level</label>
                                  <span className="main__filterCount">
                                      35
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Mid Level</label>
                                  <span className="main__filterCount">
                                      45
                                  </span>
                                </li><li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">Directors</label>
                                  <span className="main__filterCount">
                                      21
                                  </span>
                                </li>
                                <li className="main__filterItem">
                                  <input type="checkbox" className="main__FilterCheck" id="" />
                                  <label htmlFor="terms" className="main_fiterLabel">VP or Above</label>
                                  <span className="main__filterCount">
                                      56
                                  </span>
                                </li>
                                
                             </ul>
                        </div>
                    </div>
                    
                </div>
                
                </aside>

                <section className="main__cardContent">
                    <SortBy />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
                 
            </div>
        </main>
    )
}
