import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import rcilogo from '../.././assets/rcilogo.png';
import LogOutButton from '../LogOutButton/LogOutButton';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Tooltip,
    MenuItem,
    Typography,
    IconButton,
    Menu,
    Container,
} from '@mui/material';

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
            style={{ position: 'sticky', backgroundColor: 'var(--cornflower)' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 20,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Link to="/">
                            <img
                                src={rcilogo}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                            />
                        </Link>
                    </Box>
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
                            <MenuIcon fontSize="large" />
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
                                    divider
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        onClick={() => history.push(`/${page}`)}
                                    >
                                        {page}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* APPEARS when width is medium */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <Link to="/">
                            <img
                                src={rcilogo}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                            />
                        </Link>
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
                                            fontSize: '1.3rem',
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
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        onClick={() =>
                                            history.push(`/providers`)
                                        }
                                    >
                                        Dashboard
                                    </Button>
                                </MenuItem>
                            )}
                            {user.access_level === 2 && (
                                <MenuItem divider>
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        onClick={() =>
                                            history.push(`/provider`)
                                        }
                                    >
                                        Profile
                                    </Button>
                                </MenuItem>
                            )}
                            {user.access_level === 3 && (
                                <MenuItem>
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        onClick={() => history.push(`/group`)}
                                    >
                                        Profile
                                    </Button>
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
