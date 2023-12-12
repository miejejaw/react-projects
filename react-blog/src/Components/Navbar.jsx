import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>
                <a href='/' className='text-xl font-bold'>
                    Design<span className='text-orange-500'>DK</span></a>

                {/* nav items for lg devices*/}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, link }) =>
                            <li key={path}>
                                <NavLink className={({isActive,isPending}) =>
                                    isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                to={path}> {link} </NavLink>
                            </li>
                        )
                    }
                </ul>

                {/* menu icons*/}
                <div className='lg:flex gap-4 items-center hidden'>
                    <a href='/' className='hover: text-orange-500'> <FaFacebook /> </a>
                    <a href='/' className='hover: text-orange-500'> <FaDribbble /> </a>
                    <a href='/' className='hover: text-orange-500'> <FaTwitter /> </a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white '>Login</button>
                </div>

                {/*mobile menu button, display mobile screen */}
                <div className='md:hidden'>
                    <button className='cursor-pointer' onClick={toggleMenu}>
                        {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>

            </nav>

            {/* nav items for mobile devices*/}
            <div >
                <ul className={`md:hidden bg-white text-black text-lg space-y-3 px-4 block py-6 mt-14 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) =>
                            <li key={path}> <NavLink to={path}> {link} </NavLink> </li>
                        )
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar