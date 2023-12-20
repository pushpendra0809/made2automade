import React, { Component } from "react";
import logoImage from "./img/1_images.jpeg";
import logoImage9 from "./img/barcode.png";
import logoImage8 from "./img/checked.png";


export class Barcode extends Component {
  render() {
    return (
      <>
      <div className="background">
        <div className="cantent-wrap" id="cantent-wrap1">
      <div className="container1 ">
        <h2><span>Barcode</span></h2>
      </div>
      <div className="container2" id="container12">
           <div className="number32"  id="number2">

      <div className="card iteam1 md-6 mx-2 my-3" id="iteam12" style={{width: "inherite"}}>
          <div className="card-body">
            <h5 className="card-title"><img src={logoImage8} className="checked"></img>Successfully Added Product</h5>
           </div>
        </div>
        
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
      <div className="card iteam2 md-6 mx-2 my-3"  id="barcode" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage9} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body" id="btnbarcode" >
          <a href="#" className="btn btn-primary mx-1">Order Again</a>
            <a href="#" className="btn btn-primary mx-1">View Details</a>
           </div>
          </div>
          </div>
        </div>
        <div className="master-btn">
        <a href="#" className="btn btn-danger mx-1 my-4">Edit Details</a>
        <a href="#" className="btn btn-primary mx-1 my-4">Save Changes</a>
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

export default Barcode;
