import {Link} from "react-router-dom"
import "../Assets/App.css"
import Context from "./Context/Context"; 
function Converter( ) {
  return (
    <div className="App">
            <Context>

<section style={{clear:"both"}}>
  <div className="service container-fluid">
    <div className="service-block ">
    <Link to="/Image-Converter" exact>
      <div className="service-box" style={{height: "250px !important"}}>
        <h2>Image Converter</h2>
        <span> <i className="fa fa-picture-o"  > </i> </span>
        <p>Day & Night</p>
      </div>
    </Link>
    <Link to="/Video" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Video Converter</h2>
        <span> <i className="fa fa-youtube"  > </i> </span>
        <p>Day & Night</p>
      </div>
    </Link>
    </div>
  </div>
</section>
</Context>
    </div>

  );
}

export default Converter;
