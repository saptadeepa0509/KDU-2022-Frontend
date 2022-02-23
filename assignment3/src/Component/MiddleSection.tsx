
import React, { useEffect, useState } from "react";
import TweetSection from "./TweetSection";
import "./MiddleSection.css"
import Post from './Post';
import MiddleSectionComponents from "./MiddleSectionComponents";
import Profile from "./profile/Profile";

// interface Iposts {

//     userName: string,
//     displayName: string,
//     verified: true,
//     image: string,
//     avatar: string,
//     content: string,

// }

function MiddleSection() {

    return (
        <div className="Middlesection" title="middleSection">
            {(window.location.pathname === "/") ? <MiddleSectionComponents /> : <Profile/>}
        </div>
            
        
    )
}

export default MiddleSection