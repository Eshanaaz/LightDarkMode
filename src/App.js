import React , {useState} from 'react';
import './App.css';

function App() {
  const [isCool, setIsDarkMode] = useState(true);
  const display = document.querySelector('body');
  display.className = isCool ? "Light" : "Dark";
  
  const mode = () => {
    setIsDarkMode(!isCool);
  }
  return (
    
      <div>
        <div class="fontStyle"> 
          <label class="boX">
            <input type="checkbox"></input>
            <span onClick={mode} className="slider round"> </span>
          </label>
          <br></br>
          <h1 >SWIPE FOR DARK MODE AS WELL AS LIGHT MODE :)</h1>
          <br />
          <h1>BYE BYE</h1>
          </div>
         
        </div>
        
  );
  }

export default App;
