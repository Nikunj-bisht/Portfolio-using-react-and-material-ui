import React , {useState} from "react";
import {Toolbar, Typography ,Avatar, Container ,IconButton} from "@mui/material";
import { AppBar} from "@mui/material";
import Toolbaricons from "./Toolbaricons";
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";

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
<AppBar>
<Container>

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
            <Link to='/message'>

            <ChatIcon></ChatIcon>

            </Link>

<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{align:"right",position:"absolute",flexGrow:0,right:0}} />

</Toolbar>
</Container>
</AppBar>
</React.Fragment>

    )


}

export default Navigation;