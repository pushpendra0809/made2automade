import React, { Component } from "react";
// import logoImage from "./Screentexttwiter.png";
// import logoImage1 from "./app-image.png";
// import logoImage2 from "./spotify.png";
// import logoImage3 from "./Two-Goog-co.png";
// import logoImage4 from "./iNotebook.png";
// import Footer from "./footer";
export class Dashboard extends Component {
  render() {
    return (
      <>
      <div className="background">
        <div className="cantent-wrap" id="cantent-wrap1">
      <div className="container1 ">
        <h2><span>Dashboard</span></h2>
      </div>
      <div className="container2" id="container12">
        <div className="number3"  id="number2">

      <div className="card border-primary iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-8">
          <div className="card-body text-primary">
           <p className="card-text"><h1>112</h1></p>
           <p className="card-text"><h4>Total Order</h4></p>
           </div>
          </div>
          </div>
        </div>
      <div className="card border-danger iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-8">
          <div className="card-body text-danger">
            {/* <h1 className="card-title">112</h1> */}
           <p className="card-text"><h1>152</h1></p>
           <p className="card-text"><h4>New Stocks</h4></p>
           </div>
          </div>
          </div>
        </div>
      <div className="card border-success iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-8">
          <div className="card-body text-success">
            {/* <h1 className="card-title">112</h1> */}
           <p className="card-text"><h1>100</h1></p>
           <p className="card-text"><h4>Dead Stocks</h4></p>
           </div>
          </div>
          </div>
        </div>
      <div className="card iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-8">
          <div className="card-body">
            {/* <h1 className="card-title">112</h1> */}
           <p className="card-text"><h1>25</h1></p>
           <p className="card-text"><h4>Total Leadas</h4></p>
           </div>
          </div>
          </div>
        </div>
      <div className="card border-secondary iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-8">
          <div className="card-body text-secondary">
            {/* <h1 className="card-title">112</h1> */}
           <p className="card-text"><h1>1,11,200</h1></p>
           <p className="card-text"><h4>Total Revenue</h4></p>
           </div>
          </div>
          </div>
        </div>
        
     
        </div>
        
      </div>
      <div className="total">
      <div className="container my-5" id="workExperience">
      <p><h2>Total<span> Orders</span></h2>A summary of your orders</p>
      <div className="card work-experience-card">
             <div className="card-body">
              <h5 className="card-title">IR Sensor</h5>
                <p className="card-text"> Task Description here this one is realy long and it goes over maybe </p>
                <p className="card-text"> Quantity:120 pieces </p>
              </div>
             <div className="card-body">
              <h5 className="card-title">Metal Sensor</h5>
                <p className="card-text"> Task Description here this one is realy long and it goes over maybe? and goes to two lines </p>
                <p className="card-text"> Quantity:140 pieces </p>
              </div>
         </div>
         </div>

      <div className="container my-5" id="workExperience">
      <p><h2>Total<span> Leads</span></h2>A summary of your leads received</p>
      <div className="card work-experience-card">
             <div className="card-body">
              <h5 className="card-title">Rakesh Varma</h5>
                <p className="card-text"> I need metal sensor . Is it available nw?? please contact me </p>
                <p className="card-text"> Quantity:120 pieces </p>
              </div>
         </div>
         </div>
    


         </div>

         </div>
      </div>
      </>
    );
  }
}

export default Dashboard;
