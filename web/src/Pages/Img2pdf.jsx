import React from 'react'
import axios from 'axios' 
import Context from './Context/Context'
import {Container, Row, Col, Form, Button, Breadcrumb, ProgressBar} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { PDFReader } from 'react-read-pdf';

export default function Img2pdf({Config}) {
    const [link, setlink] = useState(null)
    const [Progress, setProgress] = useState(0)
    const [Myimage, setMyimage] = useState({image:null,Loimage:null, valid:true})
    const handlePDF= (e)=>{
        const MyRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
        if (MyRegex.test(e.target.value)){
            const file = e.target.files[0]
            setMyimage({...Myimage,image:file, Loimage:e.target.value, valid:true})
        }else{setMyimage({...Myimage, valid:false});}
    }
    const onClickHandler = ()=>{
        const formData = new FormData()
        const file = Myimage.image
            formData.append('file', file)

            axios.post(`${Config.BackendLink}/img2pdf`,formData,{
                onUploadProgress: (ProgressEvent) => {
                    
                    setProgress(ProgressEvent.loaded / ProgressEvent.total * 100);
                }})
            .then(res => {
                setlink("http://"+res.data)
            })
            .catch(err => {
                console.error(err); 
            })

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
                Image 2 PDF
            </Breadcrumb.Item>
        </Breadcrumb>
        <Context>
        
            <Container  >
            
            <Row className="mt-3 center text-center d-block" >
                
            </Row>

            <Row className="row mt-3">
                <Col md={1}></Col>
                {link ?  <div style={{overflow:'scroll',height:600}}>
             <PDFReader url={link} /> 
           </div>: ''}
                    <Col  md={10} >
                        <Form inline className="mt-3" >
                            <Form.File id="formcheck-api-custom" className="col-md-7 mr-2 mt-3" custom>
                                <Form.File.Input onChange={(e)=> handlePDF(e)}  isInvalid={Myimage.valid ? false: true} />
                                <Form.File.Label  data-browse="Browse">
                                {Myimage.Loimage}
                                </Form.File.Label>
                            </Form.File>
                            

                                <Button onClick={onClickHandler}  variant="info" className="mr-2 mt-3" >Convert</Button>
                                
                                 {link ? <Button href={link} download  className="mr-2 mt-3" variant="success">Download</Button> : ''} 
                             
                        </Form>
                        <ProgressBar className="mt-4" now={Progress} />

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
