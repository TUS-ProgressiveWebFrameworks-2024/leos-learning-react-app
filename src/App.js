import logo from './logo.svg';
import './App.css';
import First from './componants/First.js'; //importing First from componants folder
import Welcome from './componants/Welcome.js'; //importing First from componants folder
import Display from './componants/Display.js'; 

function App() {
  let owner = "Leo's";  /* owner has the string "Leo"*/ 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is {owner} first react app {/*using the JS  variable of owner in the html tags with curly brackets to impliment the string above into my html code so it will display on the App*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <First/> {/*calling the code in the First.js file so it will display on the App*/}
        <Welcome/>
        <Display/>
      </header>
    </div>
  );
}

export default App;
