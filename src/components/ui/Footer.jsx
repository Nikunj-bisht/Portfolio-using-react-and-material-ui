import {Snackbar} from '@mui/material';
import React , {useState , useEffect} from 'react';
const Footer = () =>{

const [open , openstate] = useState(true); 

useEffect(()=>{

    setTimeout(()=>{

       openstate(false);

    } , 4000);

} , []);


return (

    <Snackbar
    
    anchorOrigin={{ vertical:"top", horizontal:"right" }}
    open={open}
    // onClose={handleClose}
    message="Welcome!"
    // key={vertical + horizontal}

  />
)


}


export default Footer;