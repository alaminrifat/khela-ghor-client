import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysrow from "./MyToysrow";
import Swal from "sweetalert2";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [sort, setSort] = useState('x');
    const { user } = useContext(AuthContext);
    const email = user?.email;
    useEffect(() => {
        console.log(sort);
        fetch(`http://localhost:5000/mytoys?email=${email}&sort=${sort}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data);
            });
    }, [sort, email]);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FBBD23",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete my toy!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mytoys/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Toy has been deleted.",
                                "success"
                            );
                            const remaining = myToys.filter(
                                (toys) => toys._id !== id
                            );
                            setMyToys(remaining);
                        }
                    });
            }
        });
    };
    const handleAscending = () => {
        setSort("asc");
        
    };
    const handleDescending = () => {
        setSort("desc");
        
    };
    return (
        <div>
            <div className="flex items-center justify-end my-10  me-10 gap-6">
                Sort by price -
                <button
                    className="btn btn-sm btn-warning text-white"
                    onClick={handleAscending}
                >
                    Ascending
                </button>
                <button
                    className="btn btn-sm btn-warning text-white"
                    onClick={handleDescending}
                >
                    Descending{" "}
                </button>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myToys.map((toy, index) => (
                            <MyToysrow
                                key={toy._id}
                                toy={toy}
                                serial={index + 1}
                                handleDelete={handleDelete}
                            ></MyToysrow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
