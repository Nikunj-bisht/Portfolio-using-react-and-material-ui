import React , {useState} from "react";
import {Box,IconButton, Menu, MenuItem, Toolbar, Typography ,Avatar, Container} from "@mui/material";
import { AppBar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbaricons from "./Toolbaricons";

const Navigation = () =>{

const [anchorElNav, setAnchorElNav] = useState(null);

const handleOpenNavMenu = (event) =>{
    setAnchorElNav(event.currentTarget);
    }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const callit = () =>{
      console.log('called');
  }

    return (

<React.Fragment>
<AppBar position="static">
<Container maxWidth="xl">

<Toolbar>
<Typography
            variant="h6"
            noWrap
            component="div"
            onClick={callit}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Nikunj Bisht
          </Typography>
<Box>
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
                <MenuItem>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              
            </Menu>
          </Box>

<Toolbaricons></Toolbaricons>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{align:"right",position:"absolute",flexGrow:0,right:0}} />

</Toolbar>
</Container>
</AppBar>
</React.Fragment>

    )


}

export default Navigation;