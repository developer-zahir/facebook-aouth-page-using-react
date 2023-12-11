import Layout from "../layout/Layout";
import Home from "../pages/home/Home";


const publicRoute = [
    {
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    }
]


export default publicRoute;