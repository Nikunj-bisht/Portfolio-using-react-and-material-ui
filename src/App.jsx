import './App.css';
import Navigation from './components/ui/Navigation.jsx';
import Profilecards from './components/ui/Profilecards';
import Footer from './components/ui/Footer.jsx';
import Terminalui from './components/terminalcomp/Terminalui';

function App() {
  return (
    <div className="App">
     
<Navigation></Navigation>
<Terminalui></Terminalui>
<Profilecards></Profilecards>
<Footer></Footer>
     </div>
  );
}

export default App;
