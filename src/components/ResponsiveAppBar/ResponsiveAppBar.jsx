import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LensIcon from '@mui/icons-material/Lens';
import { Stack } from '@mui/material';
import Logo from '../Logo/Logo';
import { theme } from '../../config/theme';
import { useAuthContext } from '../../context/auth';
import { useCartContext } from '../../context/CartContext';
import MyCart from '../MyCart/MyCart';
import { useSnackBar } from '../../context/Snackbar';

const pages = ['Home', 'Products', 'Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [topCart, setTopCart] = useState(-500);
  const [opacityCart, setOpacityCart] = useState(0);
  const { totalItems, handleIsDisplayed } = useCartContext();
  const { setSnackBar } = useSnackBar();

  const { isLogged, handleLogin } = useAuthContext();

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

  const handleLogout = () => {
    handleLogin(false);
  };

  const handleDisplayCart = () => {
    if (isLogged) {
      handleIsDisplayed();
      setTopCart(topCart === -500 ? 50 : -500);
      setOpacityCart(opacityCart === 0 ? 1 : 0);
    } else {
      navigate('/login');
      setSnackBar('You must be logged before', 'error');
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 998,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo className="logo-large" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Onyx',
              letterSpacing: '.3rem',
              fontSize: '43px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Your Dress Code
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={page === 'Home' ? `/` : `/${page.toLocaleLowerCase()}`}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo className="logo-small" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Onyx',
              fontSize: '35px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Your Dress Code
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={page === 'Home' ? `/` : `/${page.toLocaleLowerCase()}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack alignItems="center" direction="row" spacing={4}>
              <MyCart
                topCart={topCart}
                opac={opacityCart}
                handleDisplayCart={handleDisplayCart}
              />

              <Stack direction="row" sx={{ position: 'relative', zIndex: 2 }}>
                <ShoppingCartIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handleDisplayCart}
                />
                {isLogged && (
                  <Container
                    maxWidth={false}
                    disableGutters
                    style={{
                      fontSize: '15px',
                      position: 'absolute',
                      left: '15px',
                      top: '-6px',
                      color: 'white',
                      backgroundColor: 'red',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 'auto',
                      minWidth: '20px',
                      height: '20px',
                      zIndex: 999,
                    }}
                  >
                    {totalItems}
                  </Container>
                )}

                {/* <LensIcon
                  style={{
                    fontSize: '15px',
                    position: 'absolute',
                    left: '15px',
                    top: '-6px',
                    color: 'red',
                  }}
                >
                  10
                </LensIcon> */}
              </Stack>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLogged && (
                  <Tooltip title="Open settings">
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                    <FaceIcon fontSize="large" style={{ color: 'white' }} />
                  </Tooltip>
                )}

                {!isLogged && (
                  <Link to="login" style={{ textDecoration: 'none' }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: 'white',
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        fontWeight: '500',
                      }}
                    >
                      Login
                    </Typography>
                  </Link>
                )}
              </IconButton>
            </Stack>
            {isLogged && (
              <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting === 'Logout' ? (
                      <Typography onClick={handleLogout}>Logout</Typography>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
