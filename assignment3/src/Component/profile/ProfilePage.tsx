import React from 'react'
import MiddleSection from '../MiddleSection'
import RightBar from '../RightBar'
import Sidebar from '../Sidebar'
const ProfilePage = () => {
    return (
        <div className="app">
            <Sidebar />
            <MiddleSection />
            <RightBar />
        </div>
    )
}

export default ProfilePage