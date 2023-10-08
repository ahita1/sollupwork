import React, { useState } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import logo from "./assets/hero.jpg"
import WelCome from './components/WelCome';
import Image from './components/Image';




function App() {
  // Removed the unused 'count' and 'setCount' state

  return (
    <>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Exo:wght@100&display=swap" rel="stylesheet" />
    </head>
    <div className="d-flex flex-column position-relative" style={{ height: '400px' }}>
    <img src={logo} alt="Background Logo" className="img-fluid position-absolute" style={{ zIndex: -1, width: '100%', maxHeight: '400px' }} />
    <NavBar />
    <div className="flex-grow-1"></div>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px 16px' }}>
        <div 
            className="text-white text-center" 
            style={{
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.16)',
                fontFamily: 'Exo',
                fontSize: '56px',
                fontWeight: "100",
                lineHeight: '67.2px'
            }}>
            Find Your Dream Home
        </div>
        <Button className="mt-3" style={{ zIndex: 1, borderRadius: '50px', background: 'transparent', borderColor: 'white' }}>
            Get Started
        </Button>
    </div>
    <img src={logo} alt="Your Alt Text" className="position-absolute rounded-circle mb-2 ml-2" style={{ bottom: 0, left: 0, width: '50px' }} />

</div>
<WelCome/>
<Image/>

</>
  )
}

export default App;
