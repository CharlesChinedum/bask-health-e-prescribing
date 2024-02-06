import React from 'react'
import Navbar from '../components/e-prescription/Navbar';
import Sidebar from '../components/e-prescription/Sidebar';
import MobileSidebar from '../components/e-prescription/Mobile-sidebar';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-gray-900">
                <Sidebar />
            </div>
            <div className='lg:hidden border py-2'>
                <MobileSidebar />
            </div>
            <main className="lg:pl-72">
                <Navbar />
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default layout