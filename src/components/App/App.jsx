import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
// ProtectedRoutes (Admin, Group, Provider)
import ProtectedRouteAdmin from '../ProtectedRoute/ProtectedRouteAdmin';
import ProtectedRouteGroup from '../ProtectedRoute/ProtectedRouteGroup';
import ProtectedRouteProvider from '../ProtectedRoute/ProtectedRouteProvider';
// Components
import AboutPage from '../AboutPage/AboutPage';
import GroupProfile from '../GroupProfile/GroupProfile';
import ProviderProfile from '../ProviderProfile/ProviderProfile';
import RegisterGroupForm from '../RegisterGroupForm/RegisterGroupForm';
import RegisterProviderForm from '../RegisterProviderForm/RegisterProviderForm';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';
import ProvidersList from '../ProvidersList/ProvidersList';

import ProviderDetails from '../ProviderDetails/ProviderDetails';
import GroupDetails from '../GroupDetails/GroupDetails';

export default function App() {
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
                    <Redirect exact from="/" to="/home" />

                    {/* Logged In or not, these pages should always show */}
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/provider">
                        <ProviderProfile />
                    </Route>
                    <Route
                        // shows providers at all times (logged in or not)
                        exact
                        path="/providers"
                    >
                        <ProvidersList />
                    </Route>
                    <Route
                        // shows provider-details at all times (logged in or not)
                        exact
                        path="/provider-details"
                    >
                        <ProviderDetails />
                    </Route>
                    <Route
                        // shows provider-details at all times (logged in or not)
                        exact
                        path="/group-details"
                    >
                        <GroupDetails />
                    </Route>
                    <Route
                        // logged in shows ContactPage else shows LoginPage
                        exact
                        path="/contact"
                    >
                        <ContactPage />
                    </Route>
                    <Route
                        // logged in shows ContactPage else shows LoginPage
                        exact
                        path="/group"
                    >
                        <GroupProfile />
                    </Route>
                    {/* For protected routes, the view could show one of several things on the same route.

            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                    <ProtectedRouteGroup
                        // logged in shows GroupProfile else shows GroupProfile
                        exact
                        path="/group"
                    >
                        <GroupProfile />
                    </ProtectedRouteGroup>
                    <ProtectedRouteProvider
                        // logged in shows ProviderProfile else shows ProviderProfile
                        exact
                        path="/provider"
                    >
                        <ProviderProfile />
                    </ProtectedRouteProvider>

                    <ProtectedRouteGroup exact path="/register-group">
                        <RegisterGroupForm />
                    </ProtectedRouteGroup>

                    <ProtectedRouteProvider exact path="/register-provider">
                        <RegisterProviderForm />
                    </ProtectedRouteProvider>

                    <ProtectedRouteAdmin exact path="/admin">
                        <AboutPage />
                    </ProtectedRouteAdmin>

                    <Route exact path="/login">
                        {user.id && user.access_level === 2 ? (
                            // If the user is already logged in,
                            // redirect to the /user page
                            <Redirect to="/provider" />
                        ) : (
                            // Otherwise, show the login page
                            <LoginPage />
                        )}
                    </Route>
                    <Route exact path="/login">
                        {user.id && user.access_level === 3 ? (
                            <Redirect to="/group" />
                        ) : (
                            <LoginPage />
                        )}
                    </Route>
                    <Route exact path="/registration">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them home
                            <Redirect to="/" />
                        ) : (
                            // Otherwise, show the registration page
                            <RegisterPage />
                        )}
                    </Route>

                    {/* <Route exact path="/home">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/profile" />
                        ) : (
                            // Otherwise, show the Home page
                            <HomePage />
                        )}
                    </Route> */}

                    {/* If none of the other routes matched, we will show a 404. */}
                    <Route>
                        <h1>404</h1>
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
