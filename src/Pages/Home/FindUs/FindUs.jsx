import React from "react";
import img from "../../../assets/constact.webp";
const FindUs = () => {
    return (
        <div className="my-28">
            <section className="text-neutral-700 dark:text-neutral-300 mt-20">
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <p className=" text-4xl md:text-6xl font-bold text-center mt-16 mb-6  ">
                        Any Question?
                    </p>
                    <p className="mb-16 pb-2 md:mb-12 md:pb-0">
                        We are always waiting to recieve your opinion, question. Please feel free to contact with us.
                    </p>
                </div>
            </section>
            <div className="mx-5 md:mx-48 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mt-4 md:mt-24">
                <div className="ms-10 md:ms-28 w-9/12 md:w-full ">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-4 justify-center items-stretch ms-20 md:ms-0">
                    <div>
                        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span className="text-xs font-medium text-gray-700">
                                Name
                            </span>

                            <input
                                type="name"
                                id="UserEmail"
                                placeholder="Anthony Jack"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span className="text-xs font-medium text-gray-700">
                                Email
                            </span>

                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="anthony@rhcp.com"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span className="text-xs font-medium text-gray-700">
                                Question
                            </span>

                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="Your Question"
                                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />
                        </label>
                    </div>
                    <button className="btn  btn-warning text-white md:mx-0  mx-10"> 
                    Send</button>
                </div>
                    
                
            </div>
        </div>
    );
};

export default FindUs;
