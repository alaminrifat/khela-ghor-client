import { Link } from "react-router-dom";

const MyToysrow = ({ toy, serial, handleDelete }) => {
    const { ToyName, SellerName, Category, Price, Quantity, _id,PictureUrl } = toy;
    // console.log('done');
    return (
        <tr>
            <td> {serial} </td>

            <td>
                <div className="flex items-center space-x-5">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img
                                src={PictureUrl}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ToyName}</div>
                    </div>
                </div>
                
            </td>
            <td>{SellerName}</td>
            <td>{Category}</td>
            <td>{Price}</td>
            <td>{Quantity}</td>
            <td>
                <Link to={`/edittoy/${_id}`}>
                    <button className="btn btn-sm btn-warning me-2 text-white">
                        Update
                    </button>
                </Link>

                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm btn-error text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyToysrow;
