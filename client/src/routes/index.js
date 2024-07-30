import { createBrowserRouter } from 'react-router-dom'
import App from '../App.js'
import RegisterPage from '../pages/RegisterPage.js' 
import CheckEmailPage from '../pages/CheckEmailPage.js'
import CheckPasswordPage from '../pages/CheckPasswordPage.js'
import AuthLayout from '../layout/index.js'
import Home from '../pages/Home.js'
import MessagePage from '../components/MessagePage.js'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'register',
                element: <AuthLayout><RegisterPage/></AuthLayout>
            },
            {
                path: 'email',
                element: <AuthLayout><CheckEmailPage/></AuthLayout>
            },
            {
                path: 'Password',
                element: <AuthLayout><CheckPasswordPage/></AuthLayout>
            },
            {
                path:'',
                element: <Home/>,
                children:[
                    {
                        path: ':userId',
                        element: <MessagePage/>
                    }
                ]
            }
            
        ]
    }
])

export default router