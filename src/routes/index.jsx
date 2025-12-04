import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import NotFound from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import VideoProcessingPage from "../pages/VideoProcessingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: < HomePage />
    },
    {
        path: '/home',
        element: < HomePage />
    },
    {
        path: '/video-processing',
        element: < VideoProcessingPage />
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

