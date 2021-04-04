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
        <p>Edit Images</p>
      </div>
    </Link>
    <Link to="/Video" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Youtube Downloader</h2>
        <span> <i className="fa fa-youtube"  > </i> </span>
        <p>Get Offline</p>
      </div>
    </Link>
    <Link to="/image-to-pdf" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Image 2 PDF</h2>
        <span><i className="fa fa-file-pdf-o"  ></i></span>
        <p>Any Language</p>
      </div>
   </Link>
      <Link to="/Converter" exact>
      <div className="service-box col-md-3" style={{height: "250px !important"}}>
        <h2>Converter</h2>
        <span><i className="fa fa-video-camera"  ></i></span>
        <p> Convert Anything</p>
      </div>
      </Link>
    <Link to="/Image-Converter" exact>
      <div className="service-box" style={{height: "250px !important"}}>
        <h2>Image Converter</h2>
        <span> <i className="fa fa-picture-o"  > </i> </span>
        <p>Convert Images</p>
      </div>
    </Link>

    <Link to="/Compress-images" exact>
      <div className="service-box" style={{height: "250px !important"}}>
        <h2>Compress Images</h2>
        <span> <i className="fa fa-picture-o"  > </i> </span>
        <p>Get small size Images</p>
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
