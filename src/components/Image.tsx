import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1  from "../assets/38613abf3379023fa706fdbf48cb5324.jpeg"
import image2  from "../assets/38613abf3379023fa706fdbf48cb5324.jpeg"
import image3  from "../assets/38613abf3379023fa706fdbf48cb5324.jpeg"
import image4 from "../assets/38613abf3379023fa706fdbf48cb5324.jpeg"
import image5  from "../assets/38613abf3379023fa706fdbf48cb5324.jpeg"

const Image = () => {
  return (
    <div id="component" className=" py-3">
      <div className="row">
        
        <div className="col-xl-6">
          <div className="row">
            <div className="col-6 d-flex justify-content-end align-items-center" >
            <img src={image1} alt="Residential Image" className="img-fluid w-100" />

              <p className="text-center text-white m-0 px-3 py-2" style={{ fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 100 }}>
        
                Residential
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <img src={image1} alt="Residential Image" className="img-fluid w-100" />
              <p className="text-center text-white m-0 px-3 py-2" style={{ fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 100 }}>
                Commercial
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6 d-flex justify-content-end align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <img src={image1} alt="Residential Image" className="img-fluid w-100" />
              <p className="text-center text-white m-0 px-3 py-2" style={{ fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 100 }}>
                Apartments
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <img src={image1} alt="Residential Image" className="img-fluid w-100" />

              <p className="text-center text-white m-0 px-3 py-2" style={{ fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 100 }}>
                Beach
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-6 d-flex justify-content-end align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <img src={image1} alt="Residential Image" className="img-fluid w-100" />

          <p className="text-center text-white m-0 px-3 py-2" style={{ fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: 100 }}>
            Investors
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Image;
