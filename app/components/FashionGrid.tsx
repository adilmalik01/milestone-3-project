import Image from 'next/image';
import React from 'react';

const FashionGrid = () => {
    return (
        <div className="min-h-[80vh] mx-auto w-[95%]  p-6">
        <div className="grid grid-cols-4 gap-4 max-md:gap-5 max-md:px-2 max-md:place-items-center">
            <div className="col-span-2 relative">
                <Image
                    src="/grid/card1.png"
                    width={648}
                    height={648}
                    alt="Fashion model in brown dress"
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-40 text-white p-4">
                    <p className="text-2xl font-semibold">Explore New and Popular Styles</p>
                </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-4">
                <div>
                    <Image
                        src="/grid/card2.png"
                        width={300}
                        height={400}
                        alt="Fashion model 1"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        src="/grid/card3.png"
                        width={300}
                        height={400}
                        alt="Fashion model 2"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        src="/grid/card4.png"
                        width={300}
                        height={400}
                        alt="Fashion model 3"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        src="/grid/card5.png"
                        width={300}
                        height={400}
                        alt="Fashion model 4"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default FashionGrid;