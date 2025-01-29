import React from 'react'
import "../../components/product/product.scss"
import brockol from "../../assets/brockol.png"
import { FaStar } from "react-icons/fa";
import bananaImg from "../../assets/banana.png"
import pistaImg from "../../assets/pista.png"
import pomidorImg from "../../assets/pomidor.png"
import moshImg from "../../assets/mosh.png"
import yongoqImg from "../../assets/yongoq.png"
import tuxumImg from "../../assets/tuxum.png"
import nonImg from "../../assets/non.png"
function Product() {
  return (
    <div className='product'>
       <div>
        <h1 className='product-h1'>Categories</h1>
        <h1 className='product-title'>Our Products</h1>
       </div>
       <div className='product-card-container'>

          <div className='product-card' >
            <img className='product-img' src={brockol} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Calabrese Broccoli</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={bananaImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Fresh Banana</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={pistaImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>White Nuts</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={pomidorImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Vegan Red Tomato</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={moshImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Mung Bean</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={yongoqImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Brown Hazelnut</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={tuxumImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Eggs</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

          <div className='product-card' >
            <img className='product-img' src={nonImg} alt="" />
            <h1 style={{color:"#274C5B", marginLeft:"10px"}}>Zelco Suji Elaichi</h1>
            <hr className='product-card-hr' />
            <div style={{display: "flex", gap:"10px", marginLeft:"10px"}}>
            <p style={{color: "#B8B8B8"}}><s>$20.00</s></p>
            <p style={{color:"#274C5B", fontWeight:"bold"}}>$13.00</p>
            <div>
            <FaStar style={{color: "#FFA858", marginLeft:"10px"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            <FaStar style={{color: "#FFA858"}} />
            </div>
            </div>
          </div>

       </div>
       <div style={{textAlign:"center", marginTop:"20px"}}>
        <button className='product-btn'>Learn More</button>
       </div>
    </div>
  )
}

export default Product