import React from "react";

const Nav=(props) =>{
    let home_html = props.nav[0].nav_link.map((homeObj,i)=>{
        return(
            <li key={i} class="nav-item l1">
            <a class="nav-link" href="#">{homeObj.link}</a>
          </li>
        )
      })
   
    return(
        <div>
   
<div className="container py-4">
        <div className="row">
      <div className="col">
      <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">  <strong>{props.nav[0].nav_logo}</strong></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav colorlib ml-auto">
{home_html}
{/*       
     <li class="nav-item l1">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item l1">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item l1">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item l1">
        <a class="nav-link" href="#"> Contact</a>
      </li>
      <li className="nav-item l1">
      <i className="fa fa-shopping-cart pt-4"/>
      </li>
      <li class="nav-item">
      
            <a class="nav-link" href="#"> Cart[0]</a> 
           
      </li>  */}
    </ul>
  </div>
</nav> 
      </div>
        </div>
    </div>
    </div>
     );
    };
    export default Nav;