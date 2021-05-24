import React from 'react'

export const Card = () => {
    return (
        <div className="card">
            <div className="card__header">

                <div className="card__logo">
                  {/* <img src="" alt="" className="card__img"/> */}
                </div>

                <div className="card__menu pointer">
                    <div className="card__point">

                    </div>
                </div>

            </div>

            <h2 className="card__tittle">
                 UI/UX Designer
            </h2>

            <div className="card__text">
               <p>Lorem, ipsum dolor sit amet elit consectetur adipisicing . Itaque architecto nihil temporibus... </p>
            </div>

            <div className="card__tagContent">
                <button className="card__tag">Full Time</button>
                <button className="card__tag">Min. 1 Year</button>
                <button className="card__tag">Mid Level</button>
            </div>

            <div className="card__buttonContent">
                <button className="card__button">Apply Now</button>
                <button className="card__button card__button-dark ">Save Job</button>
            </div>


        </div>
    )
}
