import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlPrarams = new URLSearchParams(location.search)
    const tabFromUrl = urlPrarams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  }
    , [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile... */}
      {tab === 'profile' && <DashProfile />}
    </div>
  )
};