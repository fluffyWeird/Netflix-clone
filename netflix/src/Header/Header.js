import React from 'react'

import './Header.css'
import Netflix from './10001.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div class ="header-outer-container">
        <div className="header-container">
            <div className='header-left'>
                <ul className='header-list'>
                    <li className='header-list-item'><img src={Netflix}alt="Netflix logo " width="100"/></li>
                    <li className='header-list-item'>Home</li>
                    <li className='header-list-item'>TV Shows</li>
                    <li className='header-list-item'>Movies</li>
                    <li className='header-list-item'>Latest</li>
                    <li className='header-list-item'>My List</li>
                </ul>
        </div>
            <div className='header-right'>
                <ul className='header-list'>
                    <li className='header-list-item'><SearchIcon /></li>
                    <li className='header-list-item'><NotificationsIcon /></li>
                    <li className='header-list-item'><AccountCircleIcon /></li>
                </ul>
            </div>
       

    </div>
    </div>


  )

}

export default Header