import React, { useState } from 'react'
import logo from '/logo.jpg'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
const NavBar = () => {

    const [open, setOpen] = useState(false)
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Admissions", path: "/course-offered" },
        { name: "Departments", path: "/departments" },
        { name: "Placements", path: "/placements" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="w-full bg-white shadow-md">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">

                <div className="flex items-center gap-3">
                    <img src={logo} className="w-14 md:w-20" />
                    <h2 className="text-sm md:text-xl font-bold text-blue-950 leading-tight">
                        NBKR Institute Of <br className="hidden md:block" />
                        Science And Technology
                    </h2>
                </div>

                <div className="hidden lg:flex gap-7">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            className="text-blue-900 font-medium hover:text-blue-500"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="lg:hidden">
                    {open ? (
                        <IoClose
                            size={30}
                            className="cursor-pointer text-blue-900"
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <HiOutlineMenuAlt3
                            size={30}
                            className="cursor-pointer text-blue-900"
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>

            </div>

            <div className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0"}`}>
                <div className="flex flex-col items-center gap-5">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            // onClick={setOpen(false)}
                            className="text-blue-900 font-medium hover:text-blue-500"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

        </nav>
    )
}

export default NavBar