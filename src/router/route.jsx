import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layout/mainLayout";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";




const myCreatedRoute = createBrowserRouter([
    {
path: "/",
element : <MainLayout></MainLayout>,
errorElement : <ErrorPage></ErrorPage>,
children: [
    {
        path :"/",
        element : <Home></Home>,
        loader : ()=>fetch('/data.json')
        
        
    },
    {
        path :"/favorites",
        element : <Favorites></Favorites>
    },
    {
        path :"/login",
        element : <Login></Login>
    },
    {
        path :"/phones/:id",
        element :<Phone></Phone>,
        loader : fetch('/phones.json')
     
    }
]
}
])


export default myCreatedRoute;