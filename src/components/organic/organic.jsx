import React from 'react'
import "../../components/organic/organic.scss"
import orgJuice from "../../assets/org-juice.jpg"
import orgFood from "../../assets/org-food.jpg"
import orgNuts from "../../assets/org-nuts.jpg"
function Organic() {
  return (
    <div className='org'>
        <div className='org-card'>
            <img className='org-img' src={orgJuice} alt="" />
            <button className='org-btn'>Organic Juice</button>
            <div className='org-card-box'></div>
        </div>
        <div className='org-card'>
            <img className='org-img' src={orgFood} alt="" />
            <button className='org-btn'>Organic Food</button>
            <div className='org-card-box'></div>
        </div>
        <div className='org-card'>
            <img className='org-img' src={orgNuts} alt="" />
            <button className='org-btn'>Nuts Cookis</button>
            <div className='org-card-box'></div>
        </div>
    </div>
  )
}

export default Organic