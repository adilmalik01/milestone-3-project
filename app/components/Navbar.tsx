"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart, BsPerson, BsTelephone, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTopHeaderOpen, setIsTopHeaderOpen] = useState(true);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleTopHeader = () => {
        setIsTopHeaderOpen(!isTopHeaderOpen);
    };

    return (
        <nav>
            {/* Top Header */}
            <div className={`bg-[#366780] text-white font-mono transition-all duration-300 ${isTopHeaderOpen ? "max-h-24 py-5" : "max-h-0 py-0"} overflow-hidden`}>
                <div className="flex justify-between items-center px-5">
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-2">
                            <BsTelephone />
                            <span>+92 300 1355 235</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <span>malikadil5679@gmail.com</span>
                        </div>
                    </div>
                    <div>
                        <p>Follow Us and get a chance to win 80% off</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Follow Us:</span>
                        <FaInstagram size={15} /> <BsYoutube /> <FaFacebook /> <BsLinkedin />
                    </div>
                    <button
                        className="text-xl md:hidden"
                        onClick={toggleTopHeader}
                    >
                        {isTopHeaderOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="py-5 px-5 bg-white shadow-md flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <Image src="/logo.png" width="150" height="50" alt="web-logo" />
                    <div className="hidden md:flex gap-5 text-[19px] font-mono">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>

                {/* Desktop Accounts Links */}
                <div className="hidden md:flex gap-5 items-center">
                    <Link href="/login" className="flex items-center gap-1">
                        <BsPerson size={20} /> <span>Login/Register</span>
                    </Link>
                    <Link href="/search">
                        <BiSearch size={20} />
                    </Link>
                    <Link href="/cart">
                        <BsCart size={20} />
                    </Link>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[#0092DD] text-white font-mono transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen py-5" : "max-h-0 py-0"} overflow-hidden`}
            >
                <div className="flex flex-col items-center gap-5">
                    <Link href="/" onClick={toggleMobileMenu}>Home</Link>
                    <Link href="/shop" onClick={toggleMobileMenu}>Shop</Link>
                    <Link href="/about" onClick={toggleMobileMenu}>About</Link>
                    <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                    <div className="flex gap-5">
                        <Link href="/login" className="flex items-center gap-1">
                            <BsPerson size={20} /> <span>Login/Register</span>
                        </Link>
                        <Link href="/search">
                            <BiSearch size={20} />
                        </Link>
                        <Link href="/cart">
                            <BsCart size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
