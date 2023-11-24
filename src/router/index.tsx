import {createBrowserRouter, Navigate} from "react-router-dom";
import LoginLayout from "../pages/login/login-layout.tsx";
import SpaceHome from "../pages/home/space-home.tsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <Navigate to="/s/1" replace/>
    }, {
        path: '/login',
        element: <LoginLayout/>
    }, {
        path: '/s/:spaceId',
        element: <SpaceHome/>,
    }
]);

export default router;