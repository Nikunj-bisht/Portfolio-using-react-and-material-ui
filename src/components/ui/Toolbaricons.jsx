import React from 'react';

import { Badge, Box, IconButton } from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';

const Toolbaricons = () =>{

    return (

        <React.Fragment>


<Box>

<IconButton>
    <Badge badgeContent={2}>
    <MailIcon ></MailIcon>
    </Badge>
</IconButton>

</Box>


        </React.Fragment>

    )


}

export default Toolbaricons;