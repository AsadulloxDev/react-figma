import React from 'react'
import "../../components/service/service.scss"
import Photo from "../../assets/Photo.png"
import vegan from "../../assets/Vegan.svg"
import mail from "../../assets/mail.svg"
function Service() {
    return (
    <div className='service'>
        <div><img className='service-img' src={Photo} alt="" /></div>
        <div>
            <h1 className='service-h1'>About us</h1>
            <h1 className='service_h1'>We Believe in Working<br /> Accredited Farmers</h1>
            <p className='service-title'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
            <div className='service-card'>
                <img src={vegan} alt="" />
                <div>
                    <h1 className='service-card-h1'>Organic Foods Only</h1>
                    <p className='service-card-title'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                </div>
            </div>
            <div className='service-card'>
                <img src={mail} alt="" />
                <div>
                    <h1 className='service-card-h1'>Quality Standards</h1>
                    <p className='service-card-title'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
                </div>
            </div>
            <button className='service-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Service