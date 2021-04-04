import React, {useState} from 'react'
import { Container, Row, Form,Col,Breadcrumb, Button  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Compress from "react-image-file-resizer";
import Context from './Context/Context';
export default function CompressImg() {

    const [imgResult, setimgResult] = useState(null)
    const [imgConfig, setimgConfig] = useState({Loimage:null,file:null,width:null, height:null, format:'JPEG',quality:100,rotation:50})
   const [imgReader, setimgReader] = useState(null)
   const [test, settest] = useState(null)

    const onFileResize = e => {
       var file = imgConfig.file
                Compress.imageFileResizer(
                file, // the file from input
                imgConfig.width, // width
                imgConfig.height, // height
                imgConfig.format, // compress format WEBP, JPEG, PNG
                imgConfig.quality, // quality
                imgConfig.retation, // rotation
                (uri) => {
                    setimgResult(uri);
                    // You upload logic goes here
                },
                "base64" // blob or base64 default base64
    );
    }
    const onFileReader = e => {
       var file = imgConfig.file
       if(e.target.id === "file inputGroupFile01"){
            setimgConfig({ ...imgConfig, file: e.target.files[0] })
            // setimgConfig({ ...imgConfig,offsetHeight:e.target.offsetHeight, offsetWidth:e.target.offsetWidth })
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setimgReader(reader.result)

            }, false)

            if (file) {
                reader.readAsDataURL(file)
            }
            
            file = e.target.files[0];
       }

    }

    
    const onImgLoad = (e)=>{
        setimgConfig({ ...imgConfig,height:e.target.offsetHeight, width:e.target.offsetWidth })
    }
    


    return (


        <>
        <Breadcrumb style={{marginTop:"5%"}}>
            <Breadcrumb.Item>
            <Link to="/">
            Home
            </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <Link to="/Converter">
            Converter
            </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Image Converter
            </Breadcrumb.Item>
        </Breadcrumb>
        <Context>
        
            <Container className='container-fliud' >
            
            <Row className="mt-3 center text-center d-block" >
                
                                   {imgResult ? <img  className='result'  src={imgResult}  /> : <img  className='reder img-thumbnail rounded' src={imgReader} onLoad={e=>onImgLoad(e)}  /> }
            </Row>

            <Row className="mt-3">
                <Col md={1}></Col>
                    <Col  md={10} style={{textAlign:"center"}} >
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                </div>
                                <div className="custom-file">
                                    <input accept="image/*" onChange={onFileReader} type="file" className="custom-file-input" id="file inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <Form.Group controlId="formBasicRange">
                                    <Form.Label>Quality :</Form.Label>
                                    <Form.Control  min={0} and max={100} value={imgConfig.quality} onChange={(e)=>{ setimgConfig({...imgConfig, quality:e.target.value}); onFileResize({target:{files:[imgConfig.file]} }) } } type="range"  custom/>
                            </Form.Group>
                            <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Width :</Form.Label>
      <Form.Control placeholder={imgConfig.width}  onChange={ (e)=> setimgConfig({...imgConfig,width:parseInt(e.target.value)})  }  /> 
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Height :</Form.Label>
      <Form.Control  placeholder={imgConfig.height} onChange={ (e)=> setimgConfig({...imgConfig,height:parseInt(e.target.value)})  } />
    </Form.Group> 

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Format :</Form.Label>
      <Form.Control as="select" defaultValue="JPEG" onChange={  (e)=> setimgConfig({...imgConfig,format:e.target.value }) }>
         <option>JPEG</option>
         <option>WEBP</option>
         <option>PNG</option>

      </Form.Control>
    </Form.Group>
  </Form.Row>
        <Button variant="info " size='lg' onClick={ onFileResize} >Apply</Button>
        {imgResult ? <a className='btn btn-danger btn-lg ml-2' href={imgResult} download={imgConfig.file.name.substr(0,imgConfig.file.name.indexOf('.'))+'.'+imgConfig.format.toLowerCase()} >Donwload</a> : ''}
                    </Col>
                <Col md={1}></Col>
            </Row>
            <Row className="mt-3 center text-center d-block" >

            </Row>
            </Container>
</Context>
        </>

    )
}
