"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiHeart, BiMobile, BiSearch } from "react-icons/bi";
import { BsCart, BsLinkedin, BsPerson, BsTelephone, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";


export default function Navbar() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // this will ensure that client-side code runs only after the component mounts
    }, []);

    return (
        <nav>
            <div className="text-white py-5 px-5 flex  bg-[#0092DD] justify-between items-center">
                <div className="flex-center gap-5 font-mono">
                    <div className="flex-center">
                        < BsTelephone />
                        <span>  +92 300 1355 235</span>
                    </div>

                    <div className="flex-center font-mono gap-1">
                        < MdEmail />
                        <span>malikadil5679@gmail.com</span>
                    </div>
                </div>
                {isClient && (
                    <div className="off">
                        <p>Follow Us and get a chance to win 80% off</p>
                    </div>
                )}
                <div className="follow-us">
                    <p className="flex-center gap-2 font-mono">
                        <span>Follow Us :</span>
                        <FaInstagram size={15}/> <BsYoutube /> <FaFacebook /> <BsLinkedin />
                    </p>
                </div>
            </div>
            <header className=" py-5 px-5  flex  justify-between ">
                <div className="flex-center gap-14 ">
                    <Image src="/logo.png" width="150" height="50" alt="web-logo" />

                    <div className="link flex-center text-[19px] font-mono gap-5">
                        <Link href={""}>
                            <h3>Home</h3>
                        </Link>
                        <Link href={""}>
                            <h3>Shop</h3>
                        </Link>
                        <Link href={""}>
                            <h3>About</h3>
                        </Link>
                        <Link href={""}>
                            <h3>Contact</h3>
                        </Link>
                    </div>
                </div>

                <div className="accounts flex-center gap-5 ">
                    <div className="links-tab gap-5 font-mono  font-semibold flex-center">
                        <Link href={""} className="flex-center gap-1">
                            <BsPerson size={20} /> <span>Login/Registar</span>
                        </Link>
                        <Link href={""}>
                            <BiSearch size={20} />
                        </Link>
                        <Link href={""}>
                            <BsCart size={20} />
                        </Link>
                    </div>
                </div>
            </header>
        </nav>
    );
}