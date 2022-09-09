import { Typography, Box } from '@material-ui/core';
import React from 'react';
import { positions } from '@mui/system';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

export default function AboutPage() {
    return (
        <>
            <Typography
                align="center"
                variant="h2"
                style={{
                    fontSize: 100,
                    fontWeight: 'bold',
                }}
            >
                <span style={{ color: 'var(--true-orange)' }}>About</span>{' '}
                <span style={{ color: 'var(--cyan)' }}>Us:</span>
            </Typography>
            <section>
                <h1>I. About RCI</h1>
                We are a nonprofit dedicated to improving the Rochester area and
                beyond through education and advocacy. We work to provide a
                platform for youth empowerment and their education and to serve
                underprivileged demographics.{' '}
            </section>
            <section>
                <h1>II. Project Background</h1>
                In 2021, we conducted a survey of over 1,000 people in Rochester
                about their mental health and mental health resources. We
                discovered that many people know that resources in the area are
                available, but have a difficult time finding or accessing them.
                We decided to develop an active database of local mental health
                resources.
            </section>
            <section>
                <h1>III. Mission</h1>
                The purpose of this project is to provide easier access to
                mental health resources. Additionally, this database is for the
                high school counselors of Century, Mayo, and John Marshall High
                Schools to use to direct students towards available aid.
            </section>
        </>
    );
}
