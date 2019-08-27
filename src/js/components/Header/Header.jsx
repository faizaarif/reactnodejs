import React from "react";


const Home=(props) =>{
   
    return(
        <div>
            <div className="container-fluid picture" style={{"background-image":`url(${props.header[0].header_main_img})`}} >
        <div className="row text-center">
      <div className="col-md-12 col-md-offset-3 col-sm-12 col-xs-12">
      <div >
        <h1 className="text py-5">{props.header[0].header_title}</h1>
        <span className="text1"><a href="index.html">{props.header[0].header_sub_title_1}</a></span>
       
        <span className="text1">{props.header[0].header_sub_title_2}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
    );};
    export default Home;