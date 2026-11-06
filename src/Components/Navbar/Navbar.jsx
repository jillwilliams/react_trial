import React from 'react'
import './Navbar.css'
import codegeek_icon from '../../assets/codegeek_icon.png'
import logo_dark from '../../assets/logo_sun.png'
import logo_light from '../../assets/logo_moon.png'
import search_icon_light from '../../assets/search_icon_one.png'
import search_icon_dark from '../../assets/search_icon_one.png'
import toggle_light from '../../assets/toggle_switch.png'
import toggle_dark from '../../assets/toggle_switch.png'


const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className='navbar'>
            <img src={codegeek_icon} alt="logo" className='logo' />
            <h3>Codegeek</h3>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" className='search_icon' />
            </div>
            <img onClick={() => {toggle_mode()}} src={theme == 'light' ? logo_light : logo_dark} alt="toggle menu" className='toggle-icon' />

        </div>
    )
}

export default Navbar