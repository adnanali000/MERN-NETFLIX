import './navbar.scss'
import React, { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);

    //checking bool for pages to make navbar more visible
    window.onscroll = ()=>{
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                 <div className="left">
                    <img src="https://thereelbits.com/wp-content/uploads/2017/05/Netflix-Logo.jpg" alt="" /> 
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>Kid</span>
                    <Notifications className='icon' />
                    <img src="https://avatars.githubusercontent.com/u/46294668?v=4" alt="" />

                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
