import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";



export default function Navbar() {

    return (
        <nav>
            <header className=" py-3 px-3 grid  grid-cols-3  place-items-center ">
                <div className="">
                        <FaSearch size={25} />
                </div>

                <div className="">
                    <Image src="/logo.png" width="150" height="100" alt="web-logo" />

                </div>

                <div className="accounts flex-center gap-5">
                    <Link href={""}>

                        <div className="links-tab gap-3  font-semibold flex-center">
                            <BsPersonCircle size={20} />
                            Account
                        </div>
                    </Link>

                    <Link href={""}>
                        <div className="links-tab gap-3 font-semibold flex-center">
                            <CgShoppingBag size={20} />
                            Shopping
                        </div>
                    </Link>
                </div>
            </header>
        </nav>
    )

}