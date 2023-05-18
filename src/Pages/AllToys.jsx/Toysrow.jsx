import { Link } from "react-router-dom";

const Toysrow = ({toy,serial}) => {
    const {ToyName,SellerName,Category,Price,Quantity,_id} = toy;
    console.log('done');
    return (
            <tr>
                <td> {serial} </td>
                <td>{ToyName}</td>
                <td>{SellerName}</td>
                <td>{Category}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td>
                    <Link to={`/toy/${_id}`}>
                    <button className="btn btn-sm btn-warning">view details</button>
                    </Link>
                    
                </td>
            </tr>
    );
};

export default Toysrow;

// Seller: (if available) show the name of the person who posted the toy
// Toy Name
// Sub-category
// Price
// Available Quantity
// View Details button


// PictureUrl
// "New Url"
// ToyName
// "New Toy"
// SellerName
// "Rifat"
// SellerEmail
// "rifat@gmail.com"
// Category
// "EngineeringToys"
// Price
// "100"
// Quantity
// "10"
// Rating
// "5"
// Description
// "onek kichy"