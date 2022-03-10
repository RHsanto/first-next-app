import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router'
import Link from 'next/link';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const router = useRouter()
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
    <AppBar sx={{background:"#274BFF"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           NEXT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
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
                 <MenuItem  onClick={handleCloseNavMenu}>
                 <Button  sx={{  color: 'black', display: 'block' }} onClick={() => router.push('/')}>Home</Button>
                 <Button  sx={{ color: 'black', display: 'block' }} onClick={() => router.push('/about')}>About</Button>
                 <Button  sx={{ color: 'black', display: 'block' }}  onClick={() => router.push('/Home/Blog/MyCard')}>Blog</Button>
                 <Button  sx={{ color: 'black', display: 'block' }}  onClick={() => router.push('/Home/Courses')}>Courses</Button>
                 <Button  sx={{ color: 'black', display: 'block' }}  onClick={() => router.push('/Home/Courses')}>Contact</Button>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            NEXT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button  sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => router.push('/')}>Home</Button>
          <Button  sx={{ my: 2, color: 'white', display: 'block' }}onClick={() => router.push('/Home/About/AboutPage')}>About</Button>
          <Button  sx={{ my: 2, color: 'white', display: 'block' }}  onClick={() => router.push('/Home/Blog/MyCard')}>Blog</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => router.push('/Home/Courses')}>Courses</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/c0.4.160.160a/p160x160/240820554_1012305832858966_4616597478329488761_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=O6d8TOfoH5wAX882gRw&tn=6CaOEfw2dNn35J-I&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8wzpi04aoR8ERpLPjxoqp6a13yHo3BdOjzO5fAjoGy4g&oe=620203BF" />
              </IconButton>
            </Tooltip>
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;