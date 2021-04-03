import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import logo from "../Assets/logo.png"
// import Imager from "../Pages/Imager"
import {Link} from "react-router-dom"

// import Image from 'react-bootstrap/Image'
export default function NavBar() {
  // const conf = useContext(ThemeContext)
  // console.log(conf)
    return ( 
        <>
          <Navbar bg="dark" variant="dark" fixed="top">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-center rounded-circle mr-1 ml-5"
                />{'   '}
                YAZEN Converter
              </Navbar.Brand>
                <Nav as="ul" className="ml-auto mr-20 navbar-nav col-md-6 offset-md-3">
                    <Nav.Item className="nav-item" as="li">
                        <Link className="nav-link" to="/" exact >Home</Link>
                    </Nav.Item>
                    <Nav.Item  className="nav-item" as="li">
                        <Link className="nav-link" to="/Imager">Image Converter</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" as="li">
                        <Link className="nav-link" to="/Video">Video Downloader</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" as="li">
                        <Link className="nav-link" to="/Converter">Converter</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" as="li">
                        <Link className="nav-link" to="/Imager">Contact</Link>
                    </Nav.Item>
                    

                        {/* <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link to='googlr.vom'>Image Converter</Nav.Link>
                        <Nav.Link href="#home">Image 2 PDF</Nav.Link>
                        <Nav.Link href="#link">Video Downloader</Nav.Link>
                        <Nav.Link href="#home">Coverter</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
               </Nav>
            </Navbar>


  {/* <Navbar bg="light" expand="lg">
  <Image src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178660c9a55%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178660c9a55%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.70833396911621%22%20y%3D%2294.8%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" rounded />
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
</>
    )
}
