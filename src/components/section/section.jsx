import React from 'react'
import "../../components/section/section.scss"
import section_card_1 from "../../assets/section-card-1.jpg";
import section_card_2 from "../../assets/section-card-2.jpg"
function Section() {
  return (
    <section>
        <div className='section-container'>
            <div className='section-card1'>
                <div><img className='section-img' src={section_card_1} alt="" /></div>
                <div className='section-card-items'>
                    <h2 className='section-card1-h2'>Natural!!</h2>
                    <h1>Get Garden <br /> Fresh Fruits</h1>
                </div>
            </div>
            <div className='section-card2'>
                <div><img className='section-img' src={section_card_2} alt="" /></div>
                <div className='section-card2-items'>
                    <h2 className='section-card2-h2'>Offer!!</h2>
                    <h1 className='section-card2-h1'>Get 10% off <br /> on Vegetables</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section