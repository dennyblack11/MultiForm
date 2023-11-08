import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../Pages/HomeScreen"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: < HomeScreen/>
    }
])