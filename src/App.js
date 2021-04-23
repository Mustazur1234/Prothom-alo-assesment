
import './App.css';
import Heading from './Heading';
import SubHeading from './SubHeading';
import prothom from '../src/image/prothom.svg';
import News from './News';

function App() {
  return (
    <div className="App">
      <div className="header_img">
        <img src={prothom} alt="prothom alo"/>
        </div>
      
      <Heading/>
     <SubHeading/>
     <News/>
    </div>
  );
}

export default App;
