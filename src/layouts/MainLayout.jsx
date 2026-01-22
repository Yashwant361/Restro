import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar  from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {

    const[isSidebarOpen , setIsSidebarOpen] = useState(true)

    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Navbar closeSider={() =>setIsSidebarOpen(false)} />

                <div className="flex flex-1 overflow-hidden">
                   { isSidebarOpen && <Sidebar />}

                     <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>

        </>
    )
}
