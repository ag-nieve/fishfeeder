import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./error-page.jsx";
import Login from "./routes/login.jsx";
import Dashboard from "./routes/dashboard.jsx";
import DashboardMainScreen from "./screens/dashboard-main.jsx";

const token = false;

const unauthenticated = [
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <DashboardMainScreen />,
            },
        ]
    }
];

const authenticated = [
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <DashboardMainScreen />,
            },
        ]
    }]

const router = createBrowserRouter([
    ...( token ? authenticated : unauthenticated),
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
