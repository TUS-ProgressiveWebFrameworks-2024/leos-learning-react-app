import logo from './logo.svg';
import './App.css';
import First from './componants/First.js'; //importing First from componants folder
import Welcome from './componants/Welcome.js'; //importing First from componants folder
import Display from './componants/Display.js'; 
import Grade from './componants/Grade.js'; 
import Population from './componants/Population.js'; 
import Day from './componants/Day.js'; 
import Practice from './componants/Practice.js'; 


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
        <Welcome person ={{name: "Leo", country: "Ireland", age: "20",}}/>
        <Welcome person ={{name: "Bob", country: "France", age: "200",}}/>
        {/*<Welcome name = {"Bob"} country = {"France"}/>*/}
        <Display/>
        <Grade person ={{name: "Leo", grade: {math:"20%", geography: "39%"},}}/>
        <Grade person ={{name: "Bob", grade: {math:"80%", geography: "30%"},}}/>
        <Grade person ={{name: "Timmy", grade: {math:"90%", geography: "60%"},}}/>
        <Population country = {"Ireland"} pop = {"5 million"}/>
        <Population country = {"France"} pop = {"60 million"}/>
        <Day short = {false}/>
        <Practice/>
      </header>
    </div>
  );
}

export default App;
