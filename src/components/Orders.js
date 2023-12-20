import React, { Component } from "react";
import logoImage from "./img/1_images.jpeg";
import logoImage1 from "./img/2_image.jpg";
import logoImage2 from "./img/3_images.jpeg";

// import Footer from "./footer";
export class Orders extends Component {
  render() {
    return (
      <>
      <div className="background">
        <div className="cantent-wrap" id="cantent-wrap1">
      <div className="container1 ">
        <h2><span>Orders</span></h2>
      </div>
      <div className="container2" id="container12">
           <div className="number31"  id="number2">
            
      <div className="card iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">M18 Through Beam Sensor PNP-NC PLUG-IN Type Sensing: 5m II Make: DOLPHIN</h5>
           <p className="card-text">M18 Through Beam Sensor with IR(Infra-red) Lights helps in detection of any target that is opaque like Wood,Plastic,Rubber,Metal,Carbaord, etc..<br></br></p>
             <p><span>Price:</span>1,12,00 <span> Customer Name:</span> Rakesh Singh <p className="card md-6 mx-2" style={{width: "70px"}}> 12 pieces</p></p>
            <a href="#" className="btn btn-primary mx-1">Order Again</a>
            <a href="#" className="btn btn-primary mx-1">View Details</a>
           </div>
          </div>
          </div>
        </div>
        
      <div className="card iteam2 md-6 mx-2 my-3"  id="iteam13" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage1} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">M12 Inductive Sensor NPN-NC Sensing: 2mm II Make: DOLPHIN</h5>
           <p className="card-text">M12 Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications
             </p>
             <p><span>Price:</span>1,12,00 <span> Customer Name:</span> Rakesh Singh<p className="card md-6 mx-2" style={{width: "70px"}}> 12 pieces</p></p>
            <a href="#" className="btn btn-primary mx-1">Order Again</a>
            <a href="#" className="btn btn-primary mx-1">View Details</a>
           </div>
          </div>
          </div>
        </div>
      <div className="card iteam2 md-6 mx-2 my-3"  id="iteam13" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage2} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Length Counter Meter with PNP/NPN Sensor Input I Make: Multispan LC-1046D</h5>
           <p className="card-text">Typically consists of a mechanical or electronic system that counts the number of rotations of a wheel or shaft, or the number of pulses from an encoder, as the material or object passes through the device.
             </p>
             <p><span>Price:</span>1,12,00 <span> Customer Name:</span> Rakesh Singh<p className="card md-6 mx-2" style={{width: "70px"}}> 12 pieces</p></p>
            <a href="#" className="btn btn-primary mx-1">Order Again</a>
            <a href="#" className="btn btn-primary mx-1">View Details</a>
           </div>
          </div>
          </div>
        </div>
        </div>
          
        
      </div>
      
         </div>
      {/* <Footer /> */}
      </div>
      </>
    );
  }
}

export default Orders;
