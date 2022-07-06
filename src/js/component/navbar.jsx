import React from "react";


function Navbar(){

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Start Bootstrap</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{"justify-content": "right"}}>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Services</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
    );
}

export default Navbar;