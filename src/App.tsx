import React, { useState } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import logo from "./assets/hero.jpg"



function App() {
  // Removed the unused 'count' and 'setCount' state

  return (
    <>
    <div className="position-relative">
    <img src={logo} alt="Background Logo" className="img-fluid position-absolute" style={{ zIndex: -1, width: '100%', maxHeight: '400px' }} />
    <NavBar />
    <Button className="position-absolute bottom-0 start-50 translate-middle-x" style={{ zIndex: 1 }}>
        Your Button
      </Button>
    </div>



   

    </>

  )
}

export default App;
