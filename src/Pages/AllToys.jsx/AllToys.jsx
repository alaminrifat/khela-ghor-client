import { useEffect, useState } from "react";
import Toysrow from "./Toysrow";
import { useRef } from "react";
import setTitle from "../../hook/setTitle";
import { FadeLoader } from "react-spinners";
const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchItem, setSearchItem] = useState(null);
    const searchInputRef = useRef(null);
    setTitle('All Toys');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (searchItem) {
            fetch(`https://khela-ghor-server.vercel.app/toys?name=${searchItem}`)
                .then((res) => res.json())
                .then((data) => {
                    setToys(data);
                    setLoading(false);
                });
        } else if (!searchItem) {
            fetch(`https://khela-ghor-server.vercel.app/toys`)
                .then((res) => res.json())
                .then((data) => {
                    setToys(data);
                    setLoading(false);
                });
        }
    }, [searchItem]);

    const setSearch = (event) => {
        event.preventDefault();
        const category = searchInputRef.current.value;
        setSearchItem(category);
    };
    return (
        <div className="mb-56   ">
            <h1 className="text-2xl text-center my-8">All Toys</h1>
            <div className="flex justify-end me-10 mb-8">
                <div className="max-h-8">
                    <input
                        className="input input-bordered input-warning me-4"
                        type="text"
                        name="search"
                        ref={searchInputRef}
                    />
                    <button className="btn btn-warning text-white" onClick={setSearch}>
                        Search
                    </button>
                </div>
            </div>
            {
                loading? <><div className="h-[600px] flex items-center justify-center"><FadeLoader color="#36d7b7"      /></div> </>:
                <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Toy Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {toys.map((toy, index) => (
                            <Toysrow
                                key={toy._id}
                                toy={toy}
                                serial={index + 1}
                            ></Toysrow>
                        ))}
                    </tbody>
                </table>
            </div>
            }
        </div>
    );
};

export default AllToys;
