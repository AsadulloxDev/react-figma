import React from 'react'
import "../../components/eco/eco.scss"
import ecoImg from "../../assets/ecoimg.jpg"

function Eco() {
  return (
    <div className='eco-container' style={{marginTop:"200px"}}>
        <div>
            <img style={{width:"800px"}} src={ecoImg} alt="" />
        </div>
        <div className='eco-card'>
            <h1 style={{fontFamily:"Yellowtail , sans-serif", color:"#7EB693"}}>Eco Friendly</h1>
            <h1 className='eco-h1'>Econis is a Friendly <br /> Organic Store</h1>
            <div style={{marginTop:"20px"}}>
                <h1 style={{color:"#274C5B", fontSize:"25px" }}>Start with Our Company First</h1>
                <p style={{color:"#525C60", fontSize:"18px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
            <div style={{marginTop:"20px"}}>
                <h1 style={{color:"#274C5B", fontSize:"25px" }}>Learn How to Grow Yourself</h1>
                <p style={{color:"#525C60", fontSize:"18px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
            <div style={{marginTop:"20px"}}>
                <h1 style={{color:"#274C5B", fontSize:"25px" }}>Farming Strategies of Today</h1>
                <p style={{color:"#525C60", fontSize:"18px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
        </div>
    </div>
  )
}

export default Eco