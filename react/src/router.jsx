import { createBrowserRouter } from "react-router-dom";
import Cards from "./views/Cards";
import NotFound from "./views/NotFound";


const router = createBrowserRouter([
    {
        path: "/cards",
        element: <Cards />
    },
    {
        path: "*",
        element: <NotFound />
    }

])

export default router;