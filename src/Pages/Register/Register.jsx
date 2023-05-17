import React, { useContext, useState } from "react";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../assets/login.svg'

const Register = () => {
    // const { createUser } = useContext(AuthContext);
    const { createUser, updateInfo, setUser,logOut } = useContext(AuthContext);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleRegister = (event) => {
        setStatus(null);
        setError(null);
        // console.log('clicnke');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if (!email || !password) {
            setError("Email or password Cann't be empty");
            return;
        }

        if (password.length < 6) {
            setError("Password must be more then 6 character");
            return;
        }

        // console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                setUser(result.user);
                setStatus("Account Created!! Please Login");
                updateInfo(name, photo)
                    .then((result) => {
                        setStatus("Account Created!! Please Login");
                        Swal.fire(
                            "Registered Success",
                            "Now Please Login To get Access",
                            "success"
                        );
                        logOut();
                        navigate('/login')
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
            })
            .catch((error) => {
                if (
                    error.message ==
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    setError("Email Already In Use!!");
                } else {
                    setError(error.message);
                }
            });
        form.reset();
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold text-khela">
                                Register now!
                            </h1>
                            <img src={logo} alt="" className="ps-0 w-9/12 py-5" />
                        </div>
                    </div>
                    <Form
                        onSubmit={handleRegister}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                    >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Your Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-md">
                                {" "}
                                Already have an account? Please{" "}
                                <Link to={"/login"} className="text-indigo-500">
                                    Login here
                                </Link>
                            </p>
                            <div className="text-center">
                                {status ? (
                                    <p className="text-teal-600">{status}</p>
                                ) : (
                                    <></>
                                )}
                                {error ? (
                                    <p className="text-red-500">{error}</p>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-warning" type="submit">
                                    Signup
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;
