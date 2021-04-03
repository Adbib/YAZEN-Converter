import {Link} from "react-router-dom"
import "../Assets/App.css"
import Context from "./Context/Context"; 
// import {ThemeContext} from "../Pages/Context/ContextConfig";
// import {useContext} from "react"
function Home( ) {

  return (
    <div className="App">
            <Context>
    
<section style={{clear:"both"}}>
  <div className="service container-fluid">
    <div className="service-block ">
    <Link to="/Imager" exact>
      <div className="service-box" style={{height: "250px !important"}}>
        <h2>Imager</h2>
        <span> <i className="fa fa-picture-o"  > </i> </span>
        <p>Day & Night</p>
      </div>
    </Link>
    <Link to="/Video" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Video Downloader</h2>
        <span> <i className="fa fa-youtube"  > </i> </span>
        <p>Day & Night</p>
      </div>
    </Link>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Image 2 PDF</h2>
        <span><i className="fa fa-file-pdf-o"  ></i></span>
        <p>Any Language</p>
      </div>
      <Link to="/Converter" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Converter</h2>
        <span><i className="fa fa-video-camera"  ></i></span>
        <p> Try and Try</p>
      </div>
      </Link>
    </div>
  </div>
</section>
</Context>
    </div>

  );
}

export default Home;
