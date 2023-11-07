import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../pages/home/home-layout.tsx";

const router = createBrowserRouter([
    {
        path: '',
        element: <HomeLayout/>
    }
]);

export default router;