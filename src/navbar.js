import React from 'react'
export default function Navbar(props) {

    return (
        
        <nav className={`navbar navbar-expand-lg px-5 navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'} `} style={{height: "10vmin"}}>
            <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                 <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                 </li>
                 <li className="nav-item active">
                 <a className="nav-link" href="/about">About <span className="sr-only"></span></a>
                 </li>
                </ul>
             
            </div>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.changemode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?"Enable dark mode":"Enable light mode"}`}</label>
            </div>
        </nav>
        
    )
}