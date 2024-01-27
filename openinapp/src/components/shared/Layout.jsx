import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sidebar'
import Header from './header'

function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <SideBar  />
            
            <div className='flex flex-col px-4 py-5 flex-1'>
            <Header/>
            <div className="flex-1 p-4 min-h-0 overflow-auto">
                {<Outlet />}
            </div>
            </div>
            
        </div>
    )
}

export default Layout
