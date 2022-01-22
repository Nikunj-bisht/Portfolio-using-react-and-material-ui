import { TextField , Card , Box ,Fab , Alert} from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import React, { useState } from "react";

const Sendmessage = () => {

const style = {margin:5 , width:400};
const [datasent , datasentstate] = useState(false);
const [name , setnamestate] = useState('');
const [gmail , setmailstate] = useState('');
const [mess , setmessstate] = useState('');

function senddata () {

 if(name.length == 0 || gmail.length == 0 || mess.length == 0){
    alert("eneter proper details!!")
 }else{
  
   fetch("https://itsmyportfoliobackend.herokuapp.com/user/storemssg",{
method:"POST",
body:JSON.stringify({
  message:mess,
  name:name
}),
headers:{
  "Content-type":"application/json"
}
   }).then(response=>{
    console.log(response);
    setnamestate('');
    setmailstate('');
    setmessstate('');
datasentstate(true);

   })
 }

}

function getname(event){

setnamestate(event.target.value);
}
function getemail(event){
setmailstate(event.target.value);
}
function getcomment(event){
setmessstate(event.target.value);
}



return (
    <Box sx={{ minWidth: 275 , width:600  ,margin:'auto', marginTop:30  }}>
    <Card variant="outlined">
    <div style={{margin:'auto'}}>

{
  !datasent && 
<React.Fragment>
<TextField id="outlined-basic" label="Name" variant="outlined" value={name} sx = {style} onChange={getname}/>
<TextField id="outlined-basic" label="Email" variant="outlined" sx = {style} value={gmail} onChange={getemail}/>
<TextField id="outlined-basic" label="Comment" variant="outlined"  sx = {style} value={mess} onChange={getcomment}/>
  <Fab variant="extended" color="primary" aria-label="add" sx = {{align:"right"}} onClick={senddata}>
          <NavigationIcon sx={{ mr: 1 }}/>
          Send
        </Fab> 
        </React.Fragment>
}
{
  datasent && <Alert severity="success">Mail sent successfully!!</Alert>

}
    </div>
    
    </Card>
 
  </Box>
)

}

export default Sendmessage;