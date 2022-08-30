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

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import MHGProfile from '../MHGProfile/MHGProfile';
import MHPProfile from '../MHPProfile/MHPProfile';
import ContactPage from '../ContactPage/ContactPage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';

function App() {
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
                    <Route exact path="/providers">
                        {/* <ProviderSearch /> ADD THIS LATER AFTER ISAAC IS DONE */}
                    </Route>

                    {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                    <ProtectedRoute
                        // logged in shows MHGProfile else shows LoginPage
                        exact
                        path="/mhgprofile"
                    >
                        <MHGProfile />
                    </ProtectedRoute>
                    <ProtectedRoute
                        // logged in shows MHGProfile else shows LoginPage
                        exact
                        path="/home"
                    >
                        <HomePage />
                    </ProtectedRoute>
                    <ProtectedRoute
                        // logged in shows MHGProfile else shows LoginPage
                        exact
                        path="/mhpprofile"
                    >
                        <MHPProfile />
                    </ProtectedRoute>
                    <ProtectedRoute
                        // logged in shows ContactPage else shows LoginPage
                        exact
                        path="/contact"
                    >
                        <ContactPage />
                    </ProtectedRoute>

                    <Route exact path="/login">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect to the /user page
                            <Redirect to="/mhgprofile" />
                        ) : (
                            // Otherwise, show the login page
                            <LoginPage />
                        )}
                    </Route>

                    <Route exact path="/registration">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/mhgprofile" />
                        ) : (
                            // Otherwise, show the registration page
                            <RegisterPage />
                        )}
                    </Route>

                    <Route exact path="/home">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/mhgprofile" />
                        ) : (
                            // Otherwise, show the Home page
                            <HomePage />
                        )}
                    </Route>

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

export default App;
