import './App.css';
import Navigation from './components/ui/Navigation.jsx';
import Profilecards from './components/ui/Profilecards';
import Footer from './components/ui/Footer.jsx';
import Terminalui from './components/terminalcomp/Terminalui';
import {Tabpanel} from './components/Githubprojects/Tabpanelcompo';
import {Route, Switch} from 'react-router-dom';
import Sendmessage from './components/sendmessagecomp/Sendmesssage';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  console.log('caled');
  return (
      <Switch>
      <Route exact path="/">
     <Navigation></Navigation>
<Terminalui></Terminalui>
<Profilecards></Profilecards>
<Tabpanel></Tabpanel>
<Footer></Footer>

     </Route>

<Route exact path="/message">

<Sendmessage></Sendmessage>

</Route>

      </Switch>
  );
}

export default App;
