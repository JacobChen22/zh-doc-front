import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../pages/home/home-layout.tsx";
import LoginLayout from "../pages/login/login-layout.tsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <HomeLayout/>
    }, {
        path: '/login',
        element: <LoginLayout/>
    }, {
        path: '/doc/:id',
        element: <HomeLayout/>
    }
]);

export default router;