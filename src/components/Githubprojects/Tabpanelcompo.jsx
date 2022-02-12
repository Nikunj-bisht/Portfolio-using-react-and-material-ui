import { TabContext , TabPanel , TabList} from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { Githubprojects } from "./Githubcomponent";
import { App_context } from "../context/Appcontext";

const Tabpanel = (props) =>{

  const app_context = useContext(App_context);
const [value , setvalfun] = useState('1');
let val = 1;


function handleChange(event , newval){

setvalfun(newval);

}

return(    
  <div style={{margin :'auto',backgroundColor:props.data}}>

<Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" sx={{fontSize:20 , margin :8}} />
            <Tab label="Item Two" value="2" sx={{fontSize:20 , margin :8}}/>
            <Tab label="Item Three" value="3" sx={{fontSize:20 , margin:8}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
            <Githubprojects tech = {'Java'}></Githubprojects>
        </TabPanel>
        <TabPanel value="2">
        <Githubprojects tech = {'JavaScript'}></Githubprojects>
       
        </TabPanel>
       
        <TabPanel value="3">
        <Githubprojects tech = {'Jupyter Notebook'}></Githubprojects>
       
        </TabPanel>
      </TabContext>
    </Box>

  </div>
)
}

export {Tabpanel};