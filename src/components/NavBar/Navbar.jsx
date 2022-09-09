import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import rcilogo from '../.././assets/rcilogo.png';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';

const pages = ['Home', 'About', 'Providers'];

export default function Navbar() {
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="static"
            style={{ backgroundColor: 'var(--cornflower)' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/home">
                            <img
                                src={rcilogo}
                                style={{
                                    width: 340,
                                    height: 120,
                                }}
                            />
                        </Link>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to={`/${page}`}
                                        >
                                            {page}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                <Typography textAlign="center">
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}
                                        to={`/${page}`}
                                    >
                                        {page}
                                    </Link>
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {!user.id && (
                            <Button
                                fontSize="16"
                                color="success"
                                onClick={() => history.push('/login')}
                                variant="contained"
                            >
                                Login / Register
                            </Button>
                        )}
                        {user.id && (
                            <Tooltip title="Account Settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <AccountCircleIcon
                                        style={{ fontSize: '4rem' }}
                                    />
                                </IconButton>
                            </Tooltip>
                        )}

                        <Menu
                            sx={{ mt: '3rem', ml: '-2rem' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* If a user is logged in, show these links */}
                            {user.access_level === 1 && (
                                <MenuItem>
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        to="/providers"
                                    >
                                        Profile
                                    </Link>
                                </MenuItem>
                            )}
                            {user.access_level === 2 && (
                                <MenuItem>
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        to="/provider"
                                    >
                                        Profile
                                    </Link>
                                </MenuItem>
                            )}
                            {user.access_level === 3 && (
                                <MenuItem>
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        to="/group"
                                    >
                                        Profile
                                    </Link>
                                </MenuItem>
                            )}

                            {/* If user IS logged in... */}
                            {user.id && (
                                <MenuItem>
                                    <LogOutButton />
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
