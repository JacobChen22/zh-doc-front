import {createBrowserRouter} from "react-router-dom";
import LoginLayout from "../pages/login/login-layout.tsx";
import SpaceHome from "../pages/home/space-home.tsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <SpaceHome/>
    }, {
        path: '/login',
        element: <LoginLayout/>
    }, {
        path: '/s/:spaceId',
        element: <SpaceHome/>,
    }
]);

export default router;