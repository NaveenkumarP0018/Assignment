import React from "react";

const HomePage = React.lazy(() => import('./components/pages/Home.js'));
const LoginPage = React.lazy(() => import('./components/pages/Login.js'));
const ContactPage = React.lazy(() => import('./components/pages/contact.js'));
const Feature = React.lazy(() => import('./components/pages/feature.js'));
const Pricing = React.lazy(() => import('./components/pages/pricing.js'));
const Team = React.lazy(() => import('./components/pages/Team.js'));
const Blogs = React.lazy(() => import('./components/pages/Blogs.js'));
const Overview = React.lazy(() => import('./components/pages/Overview.js'));
const PageNotFound = React.lazy(() => import('./components/pages/PageNotFound.js'));
const Unauthroised = React.lazy(()=>import('./components/pages/Unauthroised.js'));
const router = [
    { path: '/home', isPublic: false, element: <HomePage /> },
    { path: '/contact', isPublic: false, element: <ContactPage /> },
    { path: '/feature', isPublic: false, element: <Feature /> },
    { path: '/pricing', isPublic: false, element: <Pricing /> },
    { path: '/blogs', isPublic: false, element: <Blogs /> },
    { path: '/team', isPublic: false, element: <Team /> },
    { path: '/overview', isPublic: false, element: <Overview /> },
    { path: '/', isPublic: true, element: <LoginPage /> },
    { path: '/404', isPublic: true, element: <PageNotFound /> },
    { path: '/403', isPublic: true, element: <Unauthroised /> },
]

export default router;