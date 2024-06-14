import React , {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
 
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black'
      showAlert('Dark mode has enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has enabled','success')


    }
  }
  return (
    <>

      <Router>
      <Navbar title="TextUtil" about="about" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <div className="container my-3">
            <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}/>
            </Routes>
        <Routes>
           <Route   path="/about" element={<About mode={mode}/>}/>
            </Routes>
      </div>
      </Router>
      
      
</>
  );
}

export default App;
