
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from "../assets/financing/ad38ee869c1fcf144886153f2e19c44c.jpeg"
import image1 from "../assets/financing/image1.jpeg"


import Image from 'react-bootstrap/Image';

const Financing = () => {
  return (
    <div>
        <div>
          <div id="component" className="container-fluid py-3">
        <div className=" row justify-content-center align-items-center">
            <div className="py-1 col-md-9 justify-content-center align-items-center">
                <div className="col-12 row align-items-center d-flex">
                    <p className="text-center text-dark fs-3 fw-light font-family-Poppins col-10 m-0 px-3 py-2">
                    Financing &amp; Mortgage Options.
                    </p>
                    <p className="text-center text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                    Every family is unique when it comes to financing. Let us help guide you through the lending process and find the best rate.
                    </p>
                </div>
            </div>
            <div className="col-md-2 row justify-content-center align-items-center d-flex">
                <div className="col-12">
                    <div className="px-1 py-1 bg-danger rounded-5 border border-1 border-danger col-12 justify-content-center align-items-center d-flex">
                        <div className="col-9 justify-content-center align-items-center">
                            <p className="text-center text-white fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                            Chat Now
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>









        <div id="component" className="container-fluid py-3">
      <div className="row">
      <div className="col-xl-6 position-relative">
          <Image src={image1} fluid style={{height : '434px' , width : '648px'}} />
          <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
            top: '80%', left: '50%', transform: 'translate(-50%, -50%)',
            fontFamily: 'Poppins'
          }}>
            <h1>Buyers</h1>
            <div id="component" className="container-fluid py-3">
    <div className="px-1 py-1 bg-light rounded-5 justify-content-center align-items-center">
        <div className="col-10 justify-content-center align-items-center">
            <p className="text-center text-danger fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
            Buyer’s  Guide
            </p>
        </div>
    </div>
</div>
          </p>
        </div>

        <div className="col-xl-6 position-relative">
          <Image src={image2} fluid style={{height : '434px' , width : '648px'}} />
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
    </div>








  )
}

export default Financing
