import {React, useState} from "react"
import {Button, Modal, Form} from "react-bootstrap"
import axios from "axios"
const Modaldata = ({Myimage, setMyimage, croppedImage, Localimg}, props )=>{
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
      setMyimage({...Myimage, show:false})
  };
  if(!show){
      setMyimage({...Myimage, show:false})
  }
  // const handleShow = () => setShow(true);
  // const [File, setFile] = useState(null)
  const [imgo, setimgo] = useState("non")
  
 const uploadFile = (e) => {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', croppedImage, true);
    xhr.responseType = 'arraybuffer';
    // Process the response when the request is ready.
    xhr.onload = function(e) {
      if (this.status === 200) {
        // Create a binary string from the returned data, then encode it as a data URL.
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var binaryString = new Array(i);
        while (i--)
        {
          binaryString[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = binaryString.join('');
        var base64 = window.btoa(data);
        setimgo("data:image/png;base64,"+base64)
    }
};

xhr.send();

const  respo =(e)=>{
    const params= {
        base64image:imgo,
         Localimg:Localimg,
        Format:e.target.value
      }
      axios.post("http://127.0.0.1:5000/download/uploads",params)
      .then(res => {
              console.log(res)
          })
          .catch(err => {
                  console.error(err); 
              })
            }
            
            respo(e)
} 
  return(
                  <>
                  
          <Modal show={show} onHide={handleClose} className="text-center">
              <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body> 
                  <img className='img-thumbnail rounded' height={400} width={400} src={croppedImage}  alt='img to display' />
                  {/* <img className='img-thumbnail rounded' height={400} width={400} src={Myimage.image} /> */}
                  <Form.Control onChange={uploadFile} className="col-md-4 mt-3" as="select" custom>
                                    <option>Format</option>
                                    <option>WEBP</option>
                                    <option>PNG</option>
                                    <option>JPEG</option>
                                    <option>GIF</option>
                          </Form.Control>
                          
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
              <a className="btn btn-primary" href={croppedImage} download={Localimg} >Download</a>
              {/* <Button variant="primary" onClick={handleClose}>
                  Donwload
              </Button> */}
              </Modal.Footer>
          </Modal>
          </>
  )
}
export default Modaldata