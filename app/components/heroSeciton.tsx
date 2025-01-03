import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Main Hero Container */}
            <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />

                {/* Content Container */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Sale Badge */}
                            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1">
                                <span className="text-sm font-medium text-blue-600">
                                    New Season Sale
                                </span>
                                <div className="ml-2 h-1 w-1 rounded-full bg-blue-600" />
                                <span className="ml-2 text-sm font-medium text-blue-600">
                                    Up to 50% Off
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                                Discover Your Style{' '}
                                <span className="text-blue-600">This Season</span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 max-w-xl">
                                Explore our curated collection of premium fashion items. Find the perfect
                                pieces to express your unique style with our latest arrivals.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                                    Shop Now
                                    <ShoppingBag className="ml-2 h-5 w-5" />
                                </button>
                                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                    View Collection
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center gap-8">
                                <div className="flex items-center">
                                    <div className="rounded-full bg-green-100 p-2">
                                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">Free Shipping</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="rounded-full bg-green-100 p-2">
                                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">Secure Payment</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Hero Image */}
                        <div className="relative">
                            <div className=" flex justify-center items-star">
                                <Image src="/image.png" width={600} height={600} alt="" />

                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Summer Sale</p>
                                        <p className="text-lg font-bold text-gray-900">50% OFF</p>
                                    </div>
                                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="h-6 w-6 text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
