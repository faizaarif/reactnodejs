import React, { Component } from "react";

class Main extends Component {
    render()
{
        return(
    <div className="main">
    <div className="row">
    <div className="col-lg-12 col-md-8 col-md-offset-2 py-5 ">
   <div className="col-md-6 text-center">
   <h2>
       Sing Up for Newsletter
   </h2>
   </div>
   <div className="col-lg-12 col-md-6">
   <form action="" class="form-inline">
   <div className="row">
   <div className="col-lg-12 col-md-12 col-md-offset-0">
   <div className="form-group">
   <input type="text" class="form-control" id="email" placeholder="Enter your email"/>
    <button type="submit" class="btn btn-primary">Subscribe</button>
   </div>
   </div>
   </div>
   </form>
   </div>
    </div>
    </div>
    </div>
        
    )}
}
export default Main;
