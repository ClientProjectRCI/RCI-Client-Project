import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

export default function Footer() {
    return (
        <footer>
            &copy; Rochester Community Initiative 2022
            <br />
            <Link to="/contact">Contact RCI</Link>
        </footer>
    );
}
