import React from 'react'
import "../../components/header/header.scss"
import logo from "../../assets/logo.svg"
import { FaSearch } from "react-icons/fa";
import bgimg from "../../assets/Image.png"
function Header() {
  return (
    <header className='header'>
        <nav>
        <div className='container'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <h1 className='logo-h1'>Organick</h1>
            </div>
            <div>
                <ul className='nav-list'>
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">About</a>
                    <a href="#" className="navbar-link">Pages</a>
                    <a href="#" className="navbar-link">Shop</a>
                    <a href="#" className="navbar-link">Projects</a>
                    <a href="#" className="navbar-link">News</a>
                </ul>
            </div>
            <div className='nav-search'>
                <form className='nav-search-form'>
                    <input className='nav-input' type="text" required placeholder='Search...' />
                    <button type='submit' className='nav-btn'><FaSearch /></button>
                </form>
            </div>
        </div>
        </nav>
        <div className='hero'>
            <div className='hero-card'>
                <h1 className='hero-title'>100% Natural Food</h1>
                <h1 className='hero-h1'>Choose the best <br /> healthier way <br /> of life</h1>
                <button className='hero-btn'>Explore Now</button>
            </div>
            <div><img className='hero-img' src={bgimg} alt="" /></div>
        </div>
    </header>
  )
}

export default Header