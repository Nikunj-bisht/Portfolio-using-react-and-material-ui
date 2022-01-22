import classes from './App.css';
import Navigation from './components/ui/Navigation.jsx';
import Profilecards from './components/ui/Profilecards';
import Footer from './components/ui/Footer.jsx';
import Terminalui from './components/terminalcomp/Terminalui';
import {Tabpanel} from './components/Githubprojects/Tabpanelcompo';
import {Route, Switch} from 'react-router-dom';
import Sendmessage from './components/sendmessagecomp/Sendmesssage';
import { BrowserRouter as Router } from 'react-router-dom';
import {useState} from 'react';
import {ThemeProvider , createTheme ,  useTheme} from "@mui/material/styles";

function App() {
  console.log('rendered');
const [change , changetheme] = useState([]);
var theme =  useTheme();
const changethemefun = (isdark)=>{

theme  =  () =>{

     createTheme({
          palette: {
            mode: isdark ? 'dark' : 'light',
          },
        })
        
}
console.log('theme');
changetheme([]);

}

  return (

            
      <Switch>
      <Route exact path="/">
      <ThemeProvider theme = {theme}>
     
     <Navigation changetheme = {changethemefun}></Navigation>
<Terminalui></Terminalui>
<Profilecards></Profilecards>
<Tabpanel></Tabpanel>
<Footer></Footer>
</ThemeProvider>
     
     </Route>

<Route exact path="/message">

<Sendmessage></Sendmessage>

</Route>

      </Switch>


            );
}

export default App;

//client id//d29cl40snffkjj1ujkn61hmpz8jill

//secret//dmzt63q5ics1ff7567ztdydce88o04
