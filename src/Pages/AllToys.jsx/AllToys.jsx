import { useEffect, useState } from "react";
import Toysrow from "./Toysrow";
import { useRef } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchItem, setSearchItem] = useState(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchItem) {
            fetch(`http://localhost:5000/toys?name=${searchItem}`)
                .then((res) => res.json())
                .then((data) => {
                    setToys(data);
                });
        } else if (!searchItem) {
            fetch(`http://localhost:5000/toys`)
                .then((res) => res.json())
                .then((data) => {
                    setToys(data);
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
                    <button className="btn btn-warning" onClick={setSearch}>
                        Search
                    </button>
                </div>
            </div>
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
        </div>
    );
};

export default AllToys;
