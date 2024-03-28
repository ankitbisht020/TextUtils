import React,{useState} from "react";
export default function Todos(props){
   
    const[text, setText]= useState('');

    const handleonuppercase= ()=>{
        setText(text.toUpperCase());
    }
    const handleonspaces =()=>{
        setText(text.split(/[ ]+/).join(" "));
    }
    const handleonlowercase= ()=>{
        setText(text.toLowerCase());
    }
    const handleonclear=()=>{
        setText('');
    }
    const handleoncopy=()=>{
        const textcopy= document.getElementById("mybox");
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value);
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    
    
    return(
    
    
    <div>
    <fieldset >
    <div>
        <h1 className={`my-4 text-${props.mode==='light'?'dark':'light'}`}>Enter your text here to analyze below</h1></div>
        <div className={`my-5 text-${props.mode==='light'?'dark':'light'}`} > 
            <textarea className={`form-control align-baseline `} id="mybox" value={text} onChange={handleonchange} rows={9} placeholder="Enter your text here." style={{backgroundColor: props.mode==='light'?'white':'#787f86', color: props.mode==='light'?'black':'white'}}> </textarea>
        </div>
        <button  className={`btn btn-primary mx-2 `} onClick={handleonuppercase}>Convert to uppercase</button>
        <button  className={`btn btn-primary mx-2 `} onClick={handleonlowercase}>Convert to lowercase</button>
        <button  className={`btn btn-primary mx-2 `} onClick={handleonclear}>Clear text</button>
        <button  className={`btn btn-primary mx-2 `} onClick={handleoncopy}>Copy text</button>
        <button  className={`btn btn-primary mx-2 `} onClick={handleonspaces}>Remove extra spaces</button>
    </fieldset>
    <h1 className={`my-5 text-${props.mode==='light'?'dark':'light'}`}>Here is your text summary</h1>
    <p className={`text-${props.mode==='light'?'dark':'light'}`}> {text.split(" ").length } Words and {text.length-text.split(" ").length+1} Characters.</p>
    <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Text priview</h2>
    <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
    </div>
    
    )
}