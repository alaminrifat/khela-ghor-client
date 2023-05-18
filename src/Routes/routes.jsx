import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Dashboard/AddToy";
import AllToys from "../Pages/AllToys.jsx/AllToys";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/AllToys.jsx/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import EditToy from "../Pages/MyToys/EditToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/addtoy",
                element: (
                    <PrivateRoute>
                        <AddToy />
                    </PrivateRoute>
                ),
            },
            {
                path: "alltoys",
                element: <AllToys />,
            },
            {
                path: "toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/toy/${params.id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
            },
            {
                path: "mytoys",
                element: <MyToys />,
            },
            {
                path: "edittoy/:id",
                element: <EditToy />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/toy/${params.id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);

export default router;
