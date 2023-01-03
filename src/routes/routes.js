import { AboutLayout } from "../layouts/about";
import { MainLayout } from "../layouts/main";

import NameForm from "../Components/NameForm";
import SupportForm from "../Components/SupportForm";
import { Menu } from '../Menu';
import Login from '../Components/Login';


export const routes = [
    {
        path: '/about',
        element: AboutLayout,
        routes: [
            path: '/about',
            element: Login,
        ]
    },
    {
        path:'*',
        element:MainLayout,
        routes:[
            {
                path:'/support',
                element:SupportForm
            },
            {
                path:'/name',
                element:Login
            },
            {
                path:'/',
                element:Login
            }
        ]
    }
]