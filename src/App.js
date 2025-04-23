
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  const [mode,setMode]=useState('light');
  const [radioText,setRadioText]=useState('Enable Dark Mode');
  const [alert,setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setRadioText('Enable Light mode');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is Enabled","Success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      setRadioText('Enable Dark mode');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled","Success");
      document.title='TextUtils-Light Mode';
    }
  }
  
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },2000);
  }
   
  return (
    <div className="App">
       <>
       <Router>
       <Navbar mode={mode} toggleMode={toggleMode} radioText={radioText}/>
       <Alert alert={alert}/>
       <Routes>
        <Route exact path='/about' element={<About mode={mode}/>}/>
       <Route exact path='/' element={<TextForm title={'Enter text here to analyze'} mode={mode} showAlert={showAlert}/>}/>
       </Routes>
       </Router>
       </>
    </div>

  );
}

export default App;
