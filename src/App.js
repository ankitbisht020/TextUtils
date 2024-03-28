import React from "react";
import {useState}  from "react";
import './App.css'
import Navbar from './navbar'
import Todos from './todos'
// import About from'./about';
import Alert from './alert'
// import {BrowserRouter as Router, Route, RouterProvider, BrowserRouter}from 'react-router-dom';
  

  function App(){
  
    const [mode, setMode]=useState('light');
    const [Message, setMessage]=useState(null);
    const [Type, setType]=useState(null);  

    // const Router= BrowserRouter([
     
    //   // {
    //   //   path:"/",
    //   //   element:<Home/>
    //   // },
    //   {
    //     path:"/about",
    //     element:<About/>
    //   }
    // ])
    const modechanger=()=>{
      if(mode==='dark'){
        setMode('light');
        document.body.style.backgroundColor='white';
        alerttodo(`you are in lightmode.`,'primary');
      }
     else{
      setMode('dark');
      document.body.style.backgroundColor='#495057';
      alerttodo('you are in dark mode','warning');
      }
  }
   
  const alerttodo=(message,type)=>{
    
    setMessage(`${message}`);
    setType(type);

    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  }
 

  return (
    <>
    {/* <RouterProvider router={Router}/> */}
     <Navbar title="Text Game" mode={mode} changemode={modechanger}/> 
     <Alert message={Message} type={Type}/>
    <div className="container" >
    <Todos mode={mode}/> 
     </div> 
     </>
    
    
  
  )
  }

export default App;
