import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ closeSiderbar }) {
    return (
        <>
            <nav className='bg-black text-white px-8 py-8 flex justify-between items-center'>

                <NavLink
                    to='/'
                    onClick={closeSiderbar}
                    className='text-2xl font-bold'
                >
                    Foodie
                </NavLink>


                <ul className='flex gap-6'>
                    <li className='flex gap-6 items-center justify-center'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to='/menu'
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Menu
                        </NavLink>

                        <NavLink
                            to='/table'
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Table
                        </NavLink>

                        <NavLink
                            to='/sales'
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Sales
                        </NavLink>

                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                isActive ? 'text-red 500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to='/settings'
                            className={({ isActive }) =>
                                isActive ? 'text-red 500 font-semibold' : 'hover:text-red-400'
                            }
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>

            </nav>

        </>
    )
}

export default Navbar