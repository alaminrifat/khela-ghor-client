import { Link, NavLink } from "react-router-dom";
// import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { name, user, logOut, photo } = useContext(AuthContext);
    // console.log(name);
    const handleLogout = () => {
        logOut()
            .then((result) => {
                Swal.fire("Logout", "LogOut Successfull", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="navbar bg-base-500 mb-0 border-b-4 border-warning w-full text-xl  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>

                            {user?.email ? (
                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/alltoys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    All Toys
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to={"/"}>
                            <div className="w-16 rounded-full ms-10">
                                <img src={logo} className="w-16" />
                            </div>
                        </Link>
                        <Link
                            to={"/"}
                            className="normal-case font-bold text-3xl font-cursive text-warning"
                        >
                            KhelaGhor
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/alltoys"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                All Toys
                            </NavLink>
                        </li>

                        {/* conditional Rendaring */}
                        {user && (
                            <li>
                                <NavLink
                                    to="/mytoys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    My Toy
                                </NavLink>
                            </li>
                        ) 
                            
                        }
                        {user ? (
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        ) : (
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="invisible lg:navbar-end  lg:visible me-10">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            {user ? (
                                <img id="yes-element" src={photo} alt={name} />
                            ) : (
                                <span id="no-element">X</span>
                            )}
                        </div>
                    </div>
                    <Tooltip
                        place="right"
                        anchorSelect="#yes-element"
                        content={name}
                    />
                    <Tooltip
                        place="right"
                        anchorSelect="#no-element"
                        content="No User"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
