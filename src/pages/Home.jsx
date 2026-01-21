import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="bg-[url('public/assets/hero.jpeg')] bg-cover bg-center h-[80vh] flex items-center mt-1">
                <div className="bg-black/60 w-full h-full flex items-center">
                    <div className="max-w-4xl mx-auto px-6 text-white">
                        <h1 className="text-5xl font-bold">
                            Delicious Food, Delivered Fresh
                        </h1>
                        <p className="mt-4 text-lg text-gray-200 " >
                            Experience the taste of authentic recipes made with love.
                        </p>
                        <NavLink
                            to='/menu'
                            className="mt-3 bg-red-500 px-7 py-3 rounded hover:bg-red-600 inline-block">
                            View Menu
                        </NavLink>
                    </div>
                </div>
            </section>

        </>
    )
}

