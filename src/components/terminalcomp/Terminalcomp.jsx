import Terminal , {ColorMode , LineType} from "react-terminal-ui";

export default function Terminalcomp(){


    const [terminalLineData, setTerminalLineData] = useState([
        {type: LineType.Output, value: 'Welcome to the React Terminal UI Demo!'},
        {type: LineType.Input, value: 'Some previous input received'},
      ]);


 return (
    <div className="container">
      <Terminal name='React Terminal Usage Example' colorMode={ ColorMode.Light }  
      lineData={ terminalLineData } onInput={ terminalInput => console.log(`New terminal input received:
       '${ terminalInput }'`) }/>
    </div>
  )



} 