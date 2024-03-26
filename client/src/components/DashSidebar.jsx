import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';

export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className= 'flex flex-col gap-1'>
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item active={tab === 'profile'} icon={HiUser} label="User" labelColor='dark'>
            Profile
          </Sidebar.Item></Link>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
