import React, {Suspense} from 'react'
import axios from 'axios' 
import Context from './Context/Context'
import {Container, Row, Col, Form, Button, Breadcrumb, ProgressBar} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {useState} from 'react'
// import {LoaderProvider, useLoading, BallTriangle} from "@agney/react-loading"
 

export default function ImgConverter() {
    const [Myimage, setMyimage] = useState({image:null, valid:true, Localimg:null, Format:"JPG"})
    const [data, setdata] = useState("")
    const [Progress, setProgress] = useState(null)
    const [NewLink, setNewLink] = useState(null)

    const FileHandler = (e)=>{
        
        setProgress(0)
        setNewLink(null)
        // console.log( Myimage) 
        const file = e.target.files[0]
        
        if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/webp"){
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setMyimage({...Myimage, image:reader.result, valid:true, Localimg:e.target.value})
                setdata(file)
                // console.log(data)
            }, false)

            if (file) {
                reader.readAsDataURL(file)
            }
            
  
        // }else{setMyimage({...Myimage,valid:false})}
    }
}


const HandleFormatChange = (e)=>{
        setMyimage({...Myimage, Format:e.target.value})
    }




const getFormat = (res)=>{

    setNewLink("http://"+res.data)
    // console.log(NewLink)
    // const formData = new FormData();
    //             formData.append('file', data);;
    //             setdata(formData.get('file'))
    //             axios.post("http://127.0.0.1:5000/upload/images",formData,{
    //                 onUploadProgress: (ProgressEvent) => {
    //                     let progress = Math.round( ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
    //                     setProgress(ProgressEvent.loaded / ProgressEvent.total * 100);
    //                     console.log(ProgressEvent.loaded / ProgressEvent.total * 100) 
    //                 }})

     
        // const params = {
        //     base64image : Myimage.image,
        //     Localimg : Myimage.Localimg,
        //     Format: Myimage.Format,
        //     Formdata:data,
        // }
        // console.log(data)

        // axios({
        //     method: "POST",
        //     url: "http://127.0.0.1:5000/upload/images",
        //     data: data,
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // })
        // const formData = new FormData();
        //         formData.append('file', e.target.files[0]);

        // axios.post("http://127.0.0.1:5000/upload/images",formData)
        // .then(res=>console.log(res))
    }


    const uploadData = ()=>{
        setProgress(0)
        const formData = new FormData();
        formData.append('file', data);;
        setdata(formData.get('file'))
        axios.post(`http://127.0.0.1:5000/upload/images/${Myimage.Format}`,formData,{
            onUploadProgress: (ProgressEvent) => {
                setProgress(ProgressEvent.loaded / ProgressEvent.total * 100);
            }})
            .then(res =>getFormat(res) )
    }

    const onCli = ()=>{
        console.log(NewLink)
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
                { Myimage ?  <img className='img-thumbnail rounded' src={Myimage.image}  width={400} height={400} alt='img to dispay' /> : ""}
                
            </Row>

            <Row className="mt-3">
                <Col md={1}></Col>
                <Suspense fallback={<h1>Loading profile...</h1>} >
                    <Col  md={10} >
                        <Form inline className="mt-3" >
                            <Form.File id="formcheck-api-custom" className="col-md-7 mr-2 mt-3" custom>
                                <Form.File.Input  onChange={(e)=> FileHandler(e)} isInvalid={Myimage.valid ? false : true}  />
                                <Form.File.Label  data-browse="Browse">
                                {Myimage.Localimg}
                                </Form.File.Label>
                                { Myimage.valid ? "" : <Form.Control.Feedback type="isInvalid"  >Oops! Try an Image</Form.Control.Feedback> }
                            </Form.File>
                            
                         <Form.Control onChange={HandleFormatChange}  className="col-md-2 mr-2 sm-mt-3 mt-3" as="select" custom>
                                    <option>Format</option>
                                    <option>WEBP</option>
                                    <option>PNG</option>
                                    <option>JPEG</option>
                                    <option>GIF</option>
                          </Form.Control>

                                <Button onClick={uploadData}   variant="info" className="mr-2 mr-2 mt-3" >Convert</Button>
                                
                                {NewLink ? <Button  href={NewLink} onClick={onCli} download  className="mr-2 mt-3" variant="success">Download</Button> : ""}
                                 {/* <html>
                                
                                    <form> 
                                        <input type="file" onChange={getFormat} name="sampleFile" />
                                         <input type='submit' value='Upload!' /> 
                                    </form>     
                                
                                </html>  */}
                        </Form>
                        {/* <h6 className="text-center mt-3" >Upload end !! Please Select Format and Download</h6> */}
                        <ProgressBar className="mt-3" now={Progress} />

                    </Col>
                    </Suspense>
                <Col md={1}></Col>
            </Row>
            <Row className="mt-3 center text-center d-block" >
                {/* { Myimage ?  <img className='img-thumbnail rounded' src={Myimage.image}  width={400} height={400} alt='img to dispay' /> : ""} */}
                
            {/* <ProgressBar className="col-md-8" now={60} /> */}
            </Row>
            </Container>
</Context>
        </>
    )
}
