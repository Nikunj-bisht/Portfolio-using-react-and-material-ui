import {Component} from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

 class Terminalui extends Component{

constructor(props){

super();
this.profile = [{type: LineType.Output, value: 'Welcome!!'},
{type: LineType.Input, value: 'I am a android and backend dev'},
{type: LineType.Input, value: 'from India'},
{type: LineType.Input, value: 'love to explore new TEchnologies and solve real world problems!'}];
this.state = {
  terminalLineData :
    []
}
this.updateteminal();

}

updateteminal(){
let c = 0;
let i = 0;
let arr = [];
const run = setInterval(()=>{
  arr.push(this.profile[i]); 
  console.log(arr);
  i++;
this.setState({terminalLineData:arr})
  c++;
if(c === 4){
  clearInterval(run);
}
} , 2000);

}

render(){
 return (
   <div style={{width : 900 , textAlign:'center' , margin:'auto' , marginTop:50}}>
  <div className="container">
      <Terminal name='hI , i am NIKUNJ BISHT' colorMode={ ColorMode.Dark }  
      lineData={ this.state.terminalLineData } onInput={ terminalInput => console.log(`New terminal input received:
       '${ terminalInput }'`) }/>
    </div>
  
   </div>
  )

}

}

export default Terminalui;