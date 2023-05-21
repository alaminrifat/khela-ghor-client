import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('puzzle');
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        fetch(`https://khela-ghor-server.vercel.app/toys/${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[activeTab])

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };

    return (
        <div className="container mx-auto mt-30 md:mt-48">
            <p className=" text-4xl md:text-6xl font-bold text-center  ">
                Purchase by category
            </p>
            <div className="flex justify-center mt-16">
                <div className="flex ">
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16 cursor-pointer ${
                            activeTab === 'puzzle'
                                ? "bg-red-500 text-white font-semibold  "
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('puzzle')}
                    >
                        Puzzle
                    </div>
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16  cursor-pointer ${
                            activeTab === 'board'
                                ? "bg-red-500 text-white font-semibold  "
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('board')}
                    >
                        Board
                    </div>
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16 cursor-pointer ${
                            activeTab === 'engineering'
                                ? "bg-red-500 text-white font-semibold  "
                                : "bg-gray-200"
                        }`}
                        onClick={() => handleTabClick('engineering')}
                    >
                        Engineering
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-28 md:ms-0 ms-3 me-3 md:me-0">
                    {
                        toys.map(toy => <ProductCard key={toy._id} toy={toy}/>)
                    }
                    
            </div>
        </div>
    );
};

export default TabComponent;
