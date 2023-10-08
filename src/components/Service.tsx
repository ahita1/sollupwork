import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/serviceImages/management.jpeg";
import image2 from "../assets/serviceImages/finance.jpeg";
import image3 from "../assets/serviceImages/profit.jpeg";
import image4 from "../assets/serviceImages/mortgage.jpeg";
import image5 from "../assets/serviceImages/mortgage.jpeg";

import Image from 'react-bootstrap/Image';

const Service = () => {
  return (
    <div id="component" className="container-fluid py-3">
        <div>
        <div id="component" className="container-fluid py-3">
    <div className="py-1 justify-content-center align-items-center">
        <div className="col-xl-12 justify-content-center align-items-center d-flex">
            <p className="text-center text-dark fs-3 fw-light font-family-Poppins col-xl-9 m-0 px-3 py-2">
            Specialty Realty Services For Buyers, Sellers, and Investors.          </p>
        </div>
    </div>
</div>
        </div>
      <div className="row">
      <div className="col-xl-6 position-relative">
          <Image src={image5} fluid style={{height : '434px' , width : '648px'}} />
          <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
            top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
            fontFamily: 'Poppins'
          }}>
            Investors
          </p>
        </div>
        <div className="col-xl-6">
          <div className="row pb-3" >
            <div className="col-6 position-relative">
              <Image src={image1} fluid />
              <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
                top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
                fontFamily: 'Poppins'
              }}>
                Residential
              </p>
            </div>
            <div className="col-6 position-relative">
              <Image src={image2} fluid style={{height : '210px' , width : '315px'}}/>
              <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
                top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
                fontFamily: 'Poppins'
              }}>
                Commercial
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 position-relative">
              <Image src={image3} fluid />
              <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
                top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
                fontFamily: 'Poppins'
              }}>
                Apartments
              </p>
            </div>
            <div className="col-6 position-relative">
              <Image src={image4} fluid />
              <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
                top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
                fontFamily: 'Poppins'
              }}>
                Beach
              </p>
            </div>
          </div>
        </div>


       
      </div>
    </div>
  )
}

export default Service;
