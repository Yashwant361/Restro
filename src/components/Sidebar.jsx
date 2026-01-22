import React from 'react'
import { NavLink } from "react-router-dom";
function Sidebar() {

    const linkClass = (({ isActive }) =>
        isActive
            ? 'block px-4 py-2 bg-red-500 text-white rounded'
            : 'block px-4 py-2 hover:bg-gray-200 rounded'
    )
    return (
        <>
            <aside className='w-56 bg-white p-4 border-r '>
                <h3 className='font-bold mb-4'>Dashboard</h3>

                <NavLink to='/' className={linkClass}>Home</NavLink>
                <NavLink to='/menu' className={linkClass}>Menu</NavLink>
                <NavLink to='/table' className={linkClass}>Table</NavLink>
                <NavLink to='/sales' className={linkClass}>Sales</NavLink>
                <NavLink to='/contact' className={linkClass}>Contact</NavLink>
                <NavLink to='/settings' className={linkClass}>Settings</NavLink>
            </aside>
        </>
    )
}

export default Sidebar  