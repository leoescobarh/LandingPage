import React from "react";


function Jumbo (){

    return(

      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold" style={{"text-align": "left"}}>A Warm Welcome!</h1>
        <p className="col-md-8 fs-4"style={{"text-align": "left"}}>Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap.</p>
        <button className="btn btn-primary btn-lg" type="button"style={{"float": "left"}}>Call to action!</button>
      </div>
    </div>
  );
}

export default Jumbo;