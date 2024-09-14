import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home'
import Error from '../Pages/Shared/Error/Error';
import MyComponent from '../MyComponent';
import Login from '../Pages/Home/Login/Login';
import SportsProgrammes from '../Pages/Home/SportsProgrammes/SportsProgrammes';
import Facilities from '../Pages/Home/Facilities/Facilities';
import Instructors from '../Pages/Home/Instructors/Instructors';
import AboutUs from '../Pages/Home/AboutUs/AboutUs';
import ContactUs from '../Pages/Home/ContactUs/ContactUs';
import Signup from '../Pages/Home/Login/Signup';
import ProgramDetails from '../Pages/Home/SportsProgrammes/ProgramDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/programmer',
                element:<SportsProgrammes />
            },
            {
                path:'/facilities',
                element:<Facilities />
            },
            {
                path:'/instructors',
                element:<Instructors />
            },
            {
                path:'/about',
                element:<AboutUs />
            },

            {
                path:'/contact',
                element:<ContactUs />
            },

            {
                path:'/signup',
                element:<Signup />
            },

            {
                path:'/program/:id',
                element:<ProgramDetails />
            }
        ]
    }
])

export default router;