import React, { Component } from "react";
import logoImage1 from "./img/2_image.jpg";
export class ECommerceListing extends Component {
  render() {
    return (
      <>
      <div className="background">
        <div className="cantent-wrap" id="cantent-wrap1">
      <div className="container1 ">
        <h2><span>Ecommercelisting</span></h2>
      </div>
      <div className="container2" id="container12">
           <div className="number33"  id="number2">

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
             <p><span>Mnufacture:</span> Destotech Pvt.ltd <span> Product ID:</span>1100AA01</p>
             <p><span>Price (per piece):</span>1,500 <span> Category:</span> New Stock<p className="card md-6 mx-2" style={{width: "70px"}}> 12 pieces</p></p>
            {/* <a href="#" className="btn btn-primary mx-1">Order Again</a>
            <a href="#" className="btn btn-primary mx-1">View Details</a> */}
           </div>
          </div>
          </div>
        </div>
        </div>

        <div className='card intro10' id="intro1">
          <h1>E-Commerce Listing</h1>
        <section className="firstSection">
           <div className="leftSection">
           <h1>Amazon</h1>
           <h1> Flipkart</h1>
           <h1>Indiamart</h1> 
           <h1>website</h1>
            
           <span id="element"></span>
           </div>
           <div className="rightSection">
          <h2><a href="#" className="btn btn-primary mx-1">Upload</a></h2>
          <h2><a href="#" className="btn btn-primary mx-1">Upload</a></h2>
          <h2><a href="#" className="btn btn-primary mx-1">Upload</a></h2>
          <h2><a href="#" className="btn btn-primary mx-1">Upload</a></h2>
           </div>
        </section>
        </div>
         <div className="master-btn">
        <a href="#" className="btn btn-danger mx-1 my-4">Back</a>
        <a href="#" className="btn btn-success mx-1 my-4">Continue to Home Page</a>
         </div>
      </div>
         </div>
      </div>
      </>
    );
  }
}

export default ECommerceListing;
