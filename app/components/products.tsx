"use client"
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Main() {

    let [products, setProducts] = useState([])


    const fetchAllProducts = async () => {
        try {
            let response = await axios.get("https://dummyjson.com/products?limit=12");
            setProducts(response.data.products)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])









    return (
        <div className="main-container flex w-full flex-col gap-8 items-center mx-auto my-0">
            <div className="flex w-full max-w-4xl items-start justify-center flex-nowrap relative">
                <span className="text-center text-4xl font-medium text-black capitalize whitespace-nowrap">
                    Or subscribe to the newsletter
                </span>
            </div>

            <div className="flex w-[90%] justify-between items-center flex-wrap gap-4 relative z-[2]">
                <div className="flex flex-wrap gap-6 justify-start w-full sm:w-auto font-mono items-center">
                    <span className="text-base font-semibold text-black capitalize whitespace-nowrap">
                        all products
                    </span>
                    <span className="text-base font-semibold text-gray-500 capitalize whitespace-nowrap">
                        t-shirt
                    </span>
                    <span className="text-base font-semibold text-gray-500 capitalize whitespace-nowrap">
                        hoodies
                    </span>
                    <span className="text-base font-semibold text-gray-500 capitalize whitespace-nowrap">
                        jacket
                    </span>
                </div>

                <button className="flex items-center bg-[#1e2832] text-white text-sm font-normal px-4 py-2 gap-2 rounded-md mt-4 sm:mt-0">
                    <div className="w-5 h-5 bg-cover bg-no-repeat"></div>
                    <span>filter</span>
                </button>
            </div>

            <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-10">
                {products.map((product: any, index: any) => (
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" key={index}>
                        <div className="w-full h-64 relative">
                            <Image
                                src={product.thumbnail}
                            width={300}
                            height={400}
                            alt="Fashion model"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full p-4">
                            <span className="block text-lg font-semibold text-black mb-2">
                                {product.title}
                            </span>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">{product.brand}</span>
                                <span className="font-semibold text-black">${product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
