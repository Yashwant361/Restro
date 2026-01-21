import React from 'react'

export default function Menu() {

    const menuData = [
        {
            id: 1,
            name: 'Margherita Pizza',
            price: 299,
            desc: 'Classic cheese pizza with fresh basil',
            image: 'public/assets/pizza.jpeg'
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            price: 299,
            desc: 'Classic cheese pizza with fresh basil',
            image: 'public/assets/pizza.jpeg'
        },
        {
            id: 3,
            name: 'Margherita Pizza',
            price: 299,
            desc: 'Classic cheese pizza with fresh basil',
             image: 'public/assets/pizza.jpeg'
        }
    ]
    return (
        <>
            <section className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Popular Dishes
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {menuData.map((item) => (
                        <div
                            key={item.id}
                            className='bg-white rounded-lg shadow p-5 text-center'
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-40 object-cover rounded'
                            />
                            <h3 className='text-xl font-semibold mt-4'>
                                {item.name}
                            </h3>
                            <p className='text-grey-600 mt-2'>
                                {item.desc}
                            </p>

                            <p className='text-grey-600 mt-2'>
                                ₹ {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
