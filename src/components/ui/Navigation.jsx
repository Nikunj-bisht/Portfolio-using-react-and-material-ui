import React , {useState} from "react";
import {Toolbar
       , Typography
       ,Avatar,
       Container
       ,IconButton ,
       Switch} from "@mui/material";
import { AppBar} from "@mui/material";
import Toolbaricons from "./Toolbaricons";
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import myimg from '../../assests/myimg.jpg';

const Navigation = (props) =>{

const [anchorElNav, setAnchorElNav] = useState(null);
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const switchchanged = (event) => {

props.changetheme(event.target.checked);

}

    return (

<React.Fragment>
<AppBar sx={{backgroundColor:'#4caf50'}}>
<Container>

<Toolbar>
<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Nikunj Bisht
          </Typography>
          <Link to='/message' style={{color:'white'}}>

<IconButton>

<ChatIcon>
</ChatIcon>



</IconButton>
</Link>

<Avatar alt="Remy Sharp" src={myimg} sx={{align:"right",position:"absolute",flexGrow:0,right:0,color:'white'}} />

<IconButton href="https://itsmyportfoliobackend.herokuapp.com/nr.pdf">
Resume
<ArrowCircleDownIcon></ArrowCircleDownIcon>
</IconButton>
</Toolbar>
</Container>
</AppBar>
</React.Fragment>

    )


}

export default Navigation;