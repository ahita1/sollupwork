import React, { useState } from 'react';
import NavBar from './components/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/hero.jpg"
import WelCome from './components/WelCome';
import { Button } from 'react-bootstrap';
import ImageSoll from './components/Image';
import Service from './components/Service';
import Financing from './components/Financing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "./assets/JerseyImages/Image1.jpeg"
import Image from 'react-bootstrap/Image';





function App() {
  // Removed the unused 'count' and 'setCount' state

  return (
    <>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Exo:wght@100&display=swap" rel="stylesheet" />
    </head>
    <div className="d-flex flex-column position-relative" style={{ height: '400px',width:'100%' }}>
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
<ImageSoll />
<Service />
<Financing />



<div id="component" className="container-fluid py-3">
    <p className="text-center text-black fs-1 font-family-Poppins  m-0 px-3 py-2">
    Explore The Beautiful Jersey Shore
    </p>
</div>

<div id="component" className="container-fluid py-3">
      <div className="row">

        <div className="col-xl-12 position-relative">
        <Image src={Image1} fluid  />
          <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
            top: '80%', left: '50%', transform: 'translate(-50%, -50%)',
            fontFamily: 'Poppins'
          }}>
           <h1> Sellers</h1>
            <div id="component" className="container-fluid py-3">
    <div>
        <div className="px-1 py-1 bg-light rounded-5 col-12 justify-content-center align-items-center d-flex">
            <div className="col-10 justify-content-center align-items-center">
                <p className="text-center text-danger fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                Seller’s  Guide
                </p>
            </div>
        </div>
    </div>
</div>
          </p>
        </div>
      


       
      </div>
    </div>


</>
  )
}

export default App;
