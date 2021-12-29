import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Enable dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setModeText("Disable Dark Mode");
      document.body.style.backgroundColor = "#08022b";
      showAlert("Dark mode has been enabled!", "success");
    }
    else{
      setMode('light');
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled!", "success");

    }

  }
  
  
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText} showAlert={showAlert}/>
    <Alert alert={alert}/>
    {/* <Router>
      <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={}>
          </Route>
      </Routes>
     </Router> */}
     <div className="container">

     <Textarea heading="Enter text below" mode={mode} showAlert={showAlert}/>
     </div>
    </>
  );
}
 
export default App;
