import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function AboutPage() {
    return (
        <Container>
            <Box margin={5}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        color: 'var(--true-orange)',
                    }}
                >
                    I. About RCI
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        fontWeight: 500,
                        fontSize: 20,
                    }}
                >
                    We are a nonprofit dedicated to improving the Rochester area
                    and beyond through education and advocacy. We work to
                    provide a platform for youth empowerment and their education
                    and to serve underprivileged demographics.{' '}
                </Typography>
            </Box>
            <Box margin={5}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        color: 'var(--true-orange)',
                    }}
                >
                    II. Project Background
                </Typography>
                <Typography variant="p" sx={{ fontWeight: 500, fontSize: 20 }}>
                    In 2021, we conducted a survey of over 1,000 people in
                    Rochester about their mental health and mental health
                    resources. We discovered that many people know that
                    resources in the area are available, but have a difficult
                    time finding or accessing them. We decided to develop an
                    active database of local mental health resources.
                </Typography>
            </Box>
            <Box margin={5}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        color: 'var(--true-orange)',
                    }}
                >
                    III. Mission
                </Typography>
                <Typography variant="p" sx={{ fontWeight: 500, fontSize: 20 }}>
                    The purpose of this project is to provide easier access to
                    mental health resources. Additionally, this database is for
                    the high school counselors of Century, Mayo, and John
                    Marshall High Schools to use to direct students towards
                    available aid.
                </Typography>
            </Box>
        </Container>
    );
}
