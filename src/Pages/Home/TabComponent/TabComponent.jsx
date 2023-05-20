import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('puzzle');
    useEffect(()=>{
        
    },[activeTab])

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center mt-8">
                <div className="flex ">
                    <div
                        className={`py-4 px-16 cursor-pointer ${
                            activeTab === 'puzzle'
                                ? "bg-red-500 text-white"
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('puzzle')}
                    >
                        Puzzle
                    </div>
                    <div
                        className={`py-4 px-16  cursor-pointer ${
                            activeTab === 'board'
                                ? "bg-red-500 text-white"
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('board')}
                    >
                        Board
                    </div>
                    <div
                        className={`py-4 px-16 cursor-pointer ${
                            activeTab === 'engineering'
                                ? "bg-red-500 text-white"
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('engineering')}
                    >
                        Engineering
                    </div>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-28">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
            </div>
        </div>
    );
};

export default TabComponent;
