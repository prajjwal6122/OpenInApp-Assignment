import React from 'react'
import logo from '../../lib/constants/Screenshot 2024-01-26 173007.png'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineViewGridAdd } from 'react-icons/hi'
import classNames from 'classnames'
const linkClass =
    'flex items-center justifycontent:center gap-4 font px-3 py-2 hover:bg-zinc-300 hover:no-underline active:bg-neutral-600 rounded-sm text-center'
export default function SideBar() {
    return (
        <div className="bg-white w-60 p-3 flex flex-col text-black">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={logo} alt="Logo" />
                <span className="text-neutral text-3xl">Base</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => {
                    return <SideBarLinks key={item.key} item={item} />
                })}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <SideBarLinks key={item.key} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
function SideBarLinks({ item }) {
    const location = useLocation()
    console.log(location)
    return (
        <Link
            to={item.path}
            className={classNames(location.pathname === item.path ? 'bg text-primary' : 'text-gray-500', linkClass)}
        >
            <span className="text-xl">{item.icon}</span>
            <span className='text-lg'>{item.label}</span>
        </Link>
    )
}
