import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import { BrowserRouter } from 'react-router-dom'



 <link rel="stylesheet" href="styleforcontainer.css" /> 
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)



const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

   const toggleMode = () => {
      if(mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "black";
        document.getElementById("chead").style.color = 'white';
        document.getElementById("csum").style.color = 'white';
        document.getElementById("ccount").style.color = 'white';
        document.getElementById("cread").style.color = 'white';
        document.getElementById("cover").style.color = 'white';
        document.getElementById("cview").style.color = 'white';
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.getElementById("chead").style.color = 'black';
        document.getElementById("csum").style.color = 'black';
        document.getElementById("ccount").style.color = 'black';
        document.getElementById("cread").style.color = 'black';
        document.getElementById("cover").style.color = 'black';
        document.getElementById("cview").style.color = 'black';
        showAlert("Light mode has been enabled", "success");
        
      }
   }

  return (
    <>
     <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          <div className="container my-3">
          {/* <Switch> */}
          {/* <Route path="/"> */}
            <TextForm heading="Enter your Text to Analyze:" showAlert={showAlert}/>
          </div>
          {/* </Route>
          <Route path="about/*">
            <About/>
          </Route> */}
          
        {/* </Switch> */}
    </BrowserRouter>
    </>

  );
}

export default App;
