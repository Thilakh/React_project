import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Homepage";
import { Combine } from "./components/Logp";
import Tour_packages from "./components/Tour_packages"
const router =createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/login",element:<Combine />},
    {path:"/tour",element:<Tour_packages />},
]);
export default router;
