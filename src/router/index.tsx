import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../pages/home/home-layout.tsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <HomeLayout/>
    },
    {
        path: '/doc/:id',
        element: <HomeLayout/>
    }
]);

export default router;