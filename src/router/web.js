import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Category from "../component/Category";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: '',
        element: <Home/>
    }, {
        path: 'sanpham',
        element: <Category/>
    }
    ]
}]);