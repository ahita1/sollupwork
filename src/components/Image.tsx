import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image2.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/big.jpeg";
import Image from 'react-bootstrap/Image';

const ImageSoll = () => {
  return (
    <div id="component" className="container-fluid py-3">
      <div className="row">
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
              <Image src={image2} fluid />
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


        <div className="col-xl-6 position-relative">
          <Image src={image5} fluid />
          <p className="position-absolute text-center text-white fs-5 fw-semibold" style={{
            top: '90%', left: '50%', transform: 'translate(-50%, -50%)',
            fontFamily: 'Poppins'
          }}>
            Investors
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageSoll;
