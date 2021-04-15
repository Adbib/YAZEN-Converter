import React, {useContext} from 'react'
import { ThemeContext } from '../Pages/Context/ContextConfig'
import {Link} from "react-router-dom"
export default function Footer() {
  const Config = useContext(ThemeContext)
  // console.log(Config.Footer.categories)
// for (let i = 0; i < Config.Footer.categories.length; i++) { 
//   console.log(Config.Footer.categories[i]);
// }
// var mapjoblist = new Map(Object.entries(Config.Footer.categories));
// Object.entries(Config.Footer.categories).forEach(
//   ([key, value]) => console.log(key, value)
// );

    return (
        <footer className="site-footer bd-footer text-muted container-fliud">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>{Config.Footer.title}</h6>
            <p className="text-justify">{Config.Footer.description}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
            {Object.keys(Config.Footer.quickLinks).map(function(keyName, keyIndex) {
    		return (
          <Link key={keyName} to={Config.Footer.quickLinks[keyName].link} >
              <li>{Config.Footer.quickLinks[keyName].title}</li>
            </Link>
					
    		)
	    	})}
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">

            
              {Object.keys(Config.Footer.categories).map(function(keyName, keyIndex) {
    		return (
          <Link key={keyName} to={Config.Footer.categories[keyName].link} >
              <li>{Config.Footer.categories[keyName].title}</li>
            </Link>
					
    		)
		})}
              
            
            
            
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="https://YADbib.com"> YADbib.com</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://YADbib.com"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="https://YADbib.com"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="https://YADbib.com"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="https://YADbib.com"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}
