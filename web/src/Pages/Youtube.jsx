import {React, useState} from 'react'
import axios from "axios"
import {Container, Row, Col, Form, FormControl, Button, Breadcrumb} from "react-bootstrap"
import Context from './Context/Context'
import { Link } from 'react-router-dom'



 function Youtube() {

 
    const [url, seturl] = useState({yurl:"", params:"", valid:null, msg:""})
    const getopt = ()=>{
        // && url.yurl.startsWith("https://www.youtube.com/watch?v=")
        // && url.yurl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        if (url.yurl.length >20  ) {
            seturl({...url, valid:true})
            const id = url.yurl.substring(url.yurl.length, url.yurl.indexOf("=")+1);
            const yurl = `http://127.0.0.1:5000/download/${id}?quality=${url.params}`;
            console.log(yurl);
            axios.get(yurl)
            .then(res=>{
                console.log("res")
                window.location.href =yurl
     
            })
            
        }else{
            console.log('no');
            seturl({...url, valid:false, msg:"Oops !! Please Enter valid Youtube URL :"})

        }

    }
    

    // const uploadFile = (e) => {
    //     const respo = (e)=>{
    //         console.log(e.target.response)
    //         var reader = new FileReader();
    //         const url  = reader.readAsDataURL(e.target.response)
    //         console.log(reader)
    //     }
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("GET", "blob:http://127.0.0.1:3000/de70692d-29ac-c347-8d51-61b341fb4297");
    //     xhr.responseType = "blob";
    //     xhr.onload = respo;
    //     xhr.send();

    //     }
    
    return (
        <>
        <Context>
        <Breadcrumb style={{marginTop:"5%"}}>
            <Breadcrumb.Item>
            <Link to="/">
            Home
            </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Video Downloader
            </Breadcrumb.Item>
        </Breadcrumb>
        
        <Container style={{marginTop:"6em", marginBottom:"10px",padding: "50px 0px"}}>
                <Row>
                    <Col> </Col>
                </Row>

                <Row>
                    <Col md={2}></Col>
                    {/* style={{display:"flex", justifyContent:"center", alignItems:"center"}} */}
                    <Col  md={8}>
                    {!url.valid ? <h6 style={{color:"red",textAlign: "start"}}>{url.msg}</h6> : ""}
                    <Form  inline>
                            <FormControl type="text" value={url.yurl} placeholder="Youtube Video URL" className="mr-sm-2 col-lg-6 col-sm-12 mt-2" onChange={(e)=>seturl({...url, yurl:e.target.value})} />
                            <Form.Control onChange={(e)=>seturl({...url, params:e.target.value})} className="mr-3 mt-2" as="select" custom>
                                <option>Quality</option>
                                <option>MP4 360P</option>
                                <option>MP4 720P</option>
                                <option>MP4 1080P</option>
                                <option>MP3</option>
                            </Form.Control>
                            <Button  onClick={getopt} className="mt-2"  variant="danger">Donwload</Button>
                    </Form>
                    </Col>
                    <Col md={2}></Col>

                </Row>
        </Container>
        </Context>
        </>
    )
}
export default Youtube;
