import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import NotFound from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: < HomePage />
    },
    {
        path: '/login',
        element: < LoginPage />
    },
    {
        path: '/signup',
        element: < SignupPage />
    },
    {
        path: '*',
        element: < NotFound />
    },
]);

export default router;

