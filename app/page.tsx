// import Image from "next/image";

import Image from "next/image";
import FashionGrid from "./components/FashionGrid";
import HeroSection from "./components/heroSeciton";
import Main from "./components/products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="brandSection min-h-[50vh] justify-center flex flex-col items-center  py-10">
        <h2 className=" text-[40px] py-5  heading  ">Our Brands</h2>
        <div className="brandImages flex w-[90%]   justify-between gap-4 py-10 flex-wrap">
          <Image width={150} height={200} src="/brand/01.png" alt="brand1" />
          <Image width={150} height={200} src="/brand/02.png" alt="brand2" />
          <Image width={150} height={200} src="/brand/03.png" alt="brand3" />
          <Image width={150} height={200} src="/brand/04.png" alt="brand4" />
          <Image width={150} height={200} src="/brand/brand-1.png" alt="brand5" />
        </div>
      </div>
      <FashionGrid />
      <Main />
    </>
  );
}
