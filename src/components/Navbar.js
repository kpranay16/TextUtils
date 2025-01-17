import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
            <nav className={`navbar navbar-expand-lg `} style={{backgroundColor : props.mode==='dark'?'#212529':'white' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color: props.mode==='light'?'black':'white'}}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode==='light'?'black':'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: props.mode==='light'?'black':'white'}}>{props.about}</Link>
              </li>
             
            
            </ul>
            
              <div className={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
              </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes={
    title : PropTypes.string.isRequired,
    about : PropTypes.string,
}
Navbar.defaultProps={
    title : "Default Title",
    about : "Default About"
}
