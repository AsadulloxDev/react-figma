import React from 'react'
import inputImg from '../../assets/input-img.jpg'
import "../../components/input/input.scss"
function Input() {
  return (
    <div className='input-container'>
        <img className='input-img' src={inputImg} alt="" />
        <h1 className='input-h1'>Subscribe to <br />our Newsletter</h1>
        <form className='input-form'>
            <input className='input-email' type="email" placeholder='Your Email Address' required />
            <button className='input-btn' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default Input