import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full shadow-sm shadow-gray-300 py-5 px-5 md:px-10'>
            <div className="w-full flex justify-between">
                <div>
                    <h2 className='text-2xl font-semibold'> Hi  Victor </h2>
                    <p>You have <span className='bg-gray-100 font-semibold p-1 rounded-md text-blue-500'>14 patients</span> requesting prescription refills and <span className='bg-gray-100 font-semibold p-1 rounded-md text-blue-500'>4 messages</span></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar