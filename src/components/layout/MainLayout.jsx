import React from 'react'
import '../../css/mainlayout.css'
import BestTopics from './BestTopic'
import Header from './Header';
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='container vhvw'>
        <div className='mainlayout-a'>
            {/* Header */}
            <Header />
        </div>
        <div className='mainlayout-b'>
            {/* Main */}
            <Outlet />
        </div>
        <div className='mainlayout-c'>
            <BestTopics />
        </div>
    </div>
  )
}

export default MainLayout