import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'


function Sidebar() {
    const user=useSelector(selectUser)
    
    const recentItem=(topic)=>{
        return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    };
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://userpic.codeforces.org/455703/title/926d037c420f84b8.jpg" alt="profile_picture" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">1729</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">1729</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('codeforces')}
                {recentItem('developer')}
                {recentItem('cp')}
                {recentItem('icpc')}
            </div>
        </div>
    )
}

export default Sidebar
