import React from "react";

export default function Main() {
    return (
        <div className="main-container   flex w-[100%] flex-col gap-[35px] items-center flex-nowrap relative mx-auto my-0">
            <div className="flex w-[707px] items-start shrink-0 flex-nowrap relative">
                <span className="flex  w-[707px] h-[59px] justify-center items-start shrink-0 basis-auto font-['Roboto'] text-[50px] font-medium leading-[58.594px] text-[#000] relative text-center capitalize whitespace-nowrap z-[1]">
                    Or subscribe to the newsletter
                </span>
            </div>
            <div className="flex w-[80%] justify-between items-center shrink-0 flex-nowrap relative z-[2]">
                <div className="flex w-[373px]  justify-between items-center shrink-0 flex-nowrap relative z-[3]">
                    <div className="w-[92px] h-[22px] shrink-0 relative z-[4]">
                        <span className="flex h-full justify-start items-start font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[#000] absolute top-0 left-0 text-left capitalize whitespace-nowrap z-[5]">
                            all products
                        </span>
                    </div>
                    <div className="w-[51px] h-[22px] shrink-0 relative z-[6]">
                        <span className="flex h-full justify-start items-start font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[rgba(0,0,0,0.5)] absolute top-0 left-0 text-left capitalize whitespace-nowrap z-[7]">
                            t-shirt
                        </span>
                    </div>
                    <div className="w-[63px] h-[22px] shrink-0 relative z-[8]">
                        <span className="flex h-full justify-start items-start font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[rgba(0,0,0,0.5)] absolute top-0 left-0 text-left capitalize whitespace-nowrap z-[9]">
                            hoodies
                        </span>
                    </div>
                    <div className="w-[46px] h-[22px] shrink-0 relative z-10">
                        <span className="flex h-full justify-start items-start font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[rgba(0,0,0,0.5)] absolute top-0 left-0 text-left capitalize whitespace-nowrap z-[11]">
                            jacket
                        </span>
                    </div>
                </div>
                <button className="flex w-[92px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] gap-[4px] items-center shrink-0 flex-nowrap bg-[#1e2832] border-none relative z-[12] pointer">
                    <div className="flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap relative z-[13]">
                        <div className="w-[16px] h-[14px] shrink-0 font-['Font_Awesome_6_Free'] text-[14px] font-black  bg-cover bg-no-repeat leading-[14px] relative z-[14]" />
                    </div>
                    <span className="h-[22px] shrink-0 basis-auto font-['Open_Sans'] text-[16px] font-normal leading-[21.789px] text-[#fff] relative text-left capitalize whitespace-nowrap z-[15]">
                        filter
                    </span>
                </button>
            </div>


            <div className="flex w-[312px] flex-col gap-[18px] items-center shrink-0 flex-nowrap relative z-[17]">
                <div className="w-[312px] h-[400px] shrink-0 relative z-[18]">
                    <div className="w-[312px] h-[400px] absolute top-0 left-0 z-[19]">
                        <div className="w-full h-full bgImage bg-cover bg-no-repeat absolute top-0 left-0 z-20" />
                    </div>
                </div>
                <div className="w-[292px] h-[60px] shrink-0 relative z-[21]">
                    <div className="w-[189px] h-[22px] relative z-[24] mt-0 mr-0 mb-0 ml-0">
                        <span className="flex h-[22px] justify-start items-start font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[#000] absolute top-0 left-0 text-left capitalize whitespace-nowrap z-[25]">
                            Adicolor Classics Joggers
                        </span>
                    </div>
                    <div className="flex w-[292px] h-[22px] justify-between items-center relative z-[23] mt-[16px] mr-0 mb-0 ml-0">
                        <span className="h-[22px] shrink-0 font-['Open_Sans'] text-[16px] font-normal leading-[21.789px] text-[rgba(0,0,0,0.5)] relative text-left capitalize whitespace-nowrap z-[22]">
                            Dress
                        </span>
                        <span className="flex w-[51px] h-[22px] justify-end items-start shrink-0 font-['Open_Sans'] text-[16px] font-semibold leading-[21.789px] text-[#000] relative text-right capitalize whitespace-nowrap z-[23]">
                            $63.85
                        </span>
                    </div>
                </div>
            </div>




        </div>
    );
}
