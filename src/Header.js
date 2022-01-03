import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import {logout, selectUser} from '../src/features/userSlice'


function Header() {
    const dispatch=useDispatch()

    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="profile_picture"/>
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption onClick={logoutOfApp} avatar={true} title="me" />
            </div>
        </div>
    )
}

export default Header
