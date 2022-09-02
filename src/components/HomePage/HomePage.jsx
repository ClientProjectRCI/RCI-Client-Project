import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function HomePage() {
    return (
        <div className="row center">
            <div className="w-50">
                <h1>Organize</h1>
                <h1>Educate</h1>
                <h1>Advocate</h1>
                <text className="left">
                    Improving our community through avenues of social justice,
                    providing a platform for youth empowerment and their
                    education, and serving underprivileged demographics.
                </text>
            </div>
            <div className="w-50 outline">
                <h1>Crisis Hotline</h1>
                <h3>1-844-CRISIS2 or text HOME to 741741.</h3>
                <br></br>
                <h3>Are you or someone you know in mental distress?</h3>
            </div>
        </div>
    );
}
