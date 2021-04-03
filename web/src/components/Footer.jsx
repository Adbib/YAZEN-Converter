import React from 'react'
// import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">YADbib.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="https://YADbib.com">C</a></li>
              <li><a href="https://YADbib.com">UI Design</a></li>
              <li><a href="https://YADbib.com">PHP</a></li>
              <li><a href="https://YADbib.com">Java</a></li>
              <li><a href="https://YADbib.com">Android</a></li>
              <li><a href="https://YADbib.com">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about/">About Us</a></li>
              <li><a href="/contact/">Contact Us</a></li>
              <li><a href="/contribute-at-YAZEN/">Contribute</a></li>
              <li><a href="/privacy-policy/">Privacy Policy</a></li>
              <li><a href="/sitemap/">Sitemap</a></li>
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
