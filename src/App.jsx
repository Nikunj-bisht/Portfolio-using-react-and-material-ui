import classes from "./App.css";
import Navigation from "./components/ui/Navigation.jsx";
import Profilecards from "./components/ui/Profilecards";
import Footer from "./components/ui/Footer.jsx";
import Terminalui from "./components/terminalcomp/Terminalui";
import { Tabpanel } from "./components/Githubprojects/Tabpanelcompo";
import { Route, Switch } from "react-router-dom";
import Sendmessage from "./components/sendmessagecomp/Sendmesssage";
import { useState } from "react";
import { App_context } from "./components/context/Appcontext";
import Profile from "./components/ui/profile";
 

function App() {
  console.log("rendered");
  const c = {
    color: "white",
  };
  const [change, changetheme] = useState("white");
  const changethemefun = (isdark) => {
    if (isdark) {
      c.color = "black";
      console.log("Changed");
      changetheme("#212121");
    } else {
      c.color = "white";
      changetheme("white");
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <App_context.Provider value={c}>
          <Navigation changetheme={changethemefun}></Navigation>
          <Terminalui></Terminalui>
          <Profilecards data={change}></Profilecards>
          <Tabpanel data={change}></Tabpanel>
          <Footer></Footer>
        </App_context.Provider>
      </Route>

      <Route exact path="/message">
        <Sendmessage></Sendmessage>
      </Route>
      <Route exact path="/profile">
<Profile></Profile>
      </Route>
    </Switch>
  );
}

export default App;

//client id//d29cl40snffkjj1ujkn61hmpz8jill

//secret//dmzt63q5ics1ff7567ztdydce88o04
