import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle)=>{
        return (<div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Codeforces Round #750","Participants: 19780")}
            {newsArticle("Codeforces Round #751","Participants: 14578")}
            {newsArticle("Codeforces Round #752","Participants: 24657")}
            {newsArticle("Codeforces Round #753","Participants: 20479")}
            {newsArticle("Codeforces Round #755","Participants: 20001")}
        </div>
    )
}

export default Widgets
