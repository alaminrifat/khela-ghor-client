import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addtoy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((newData) => {
                console.log(newData);
            });
        // console.log(data);
    };

    return (
        <div className="my-20">
            <h1 className="text-4xl text-center mb-8">Add A Toy</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center gap-6"
            >
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Picture Url"
                    {...register("PictureUrl", { required: true })}
                />
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Toy Name"
                    {...register("ToyName", { required: true })}
                />
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Seller Name"
                    {...register("SellerName", {})}
                />
                <input
                    type="email"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Seller Email"
                    {...register("SellerEmail", { required: true })}
                />
                <select
                    className="p-4 border-2 w-96 rounded-lg"
                    {...register("Category", { required: true })}
                >
                    <option value="EngineeringToys">Engineering Toys</option>
                    <option value="MathToys">Math Toys</option>
                    <option value="ScienceToys">Science Toys</option>
                </select>
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Price"
                    {...register("Price", {})}
                />
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Quantity"
                    {...register("Quantity", {})}
                />
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Rating"
                    {...register("Rating", {})}
                />
                <input
                    type="text"
                    className="p-4 border-2 w-96 rounded-lg"
                    placeholder="Description"
                    {...register("Description", {})}
                />

                <input className="btn btn-warning btn-wide" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;
