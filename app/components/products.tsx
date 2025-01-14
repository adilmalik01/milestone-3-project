"use client"
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


interface productSchema { id: number; thumbnail: string; title: string; brand: string; price: number }


export default function Main() {

    const [products, setProducts] = useState<productSchema[]>([])


    const fetchAllProducts = async () => {
        try {
            const response: AxiosResponse<{ products: productSchema[] }> = await axios.get("https://dummyjson.com/products?limit=12");
            setProducts(response.data.products)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])


    const fitlerProduct = async (category: string) => {
        console.log(category);
        try {
            const response: AxiosResponse<{ products: productSchema[] }> = await axios.get(`https://dummyjson.com/products/category/${category}?limit=12`);
            setProducts(response.data.products)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="main-container flex w-full flex-col gap-8 items-center mx-auto my-5 py-5
        ">
            <div className="flex w-full max-w-4xl items-start justify-center flex-nowrap relative">
                <span className="text-center max-md:text-2xl text-4xl font-medium text-black capitalize whitespace-nowrap">
                    Best Sellers
                </span>
            </div>

            <div className="flex w-[90%] justify-between items-center flex-wrap gap-4 relative z-[2]">
                <div className="flex flex-wrap gap-6 justify-start w-full sm:w-auto font-mono items-center">
                    <span className="text-base font-semibold text-black capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fetchAllProducts() }} className=" cursor-pointer" value="all products" />
                    </span>
                    <span className="text-base font-semibold text-black capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fitlerProduct("mens-shirts") }} className=" cursor-pointer" value="mens-shirts" />
                    </span>
                    <span className="text-base font-semibold text-black  capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fitlerProduct("furniture") }} className=" cursor-pointer" value="furniture" />
                    </span>
                    <span className="text-base font-semibold text-black  capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fitlerProduct("womens-dresses") }} className=" cursor-pointer" value="womens-dresses" />
                    </span>
                    <span className="text-base font-semibold text-black  capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fitlerProduct("mens-watches") }} className=" cursor-pointer" value="mens-watches" />
                    </span>
                    <span className="text-base font-semibold text-black  capitalize whitespace-nowrap">
                        <input type="button" onClick={() => { fitlerProduct("womens-shoes") }} className=" cursor-pointer" value="womens-shoes" />
                    </span>
                </div>

                <button onClick={() => { fetchAllProducts() }} className="flex items-center bg-[#1e2832] text-white text-sm font-normal px-4 py-2 gap-2 rounded-md mt-4 sm:mt-0">
                    <div className="w-5 h-5 bg-cover bg-no-repeat">X</div>
                    <span >filter</span>
                </button>
            </div>

            <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-10">
                {products.map((product: productSchema, index: number) => (
                    <div className="flex hover:shadow-lg flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden" key={index}>
                        <Link href={`/product/${product.id}`}>
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
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
}
