import {React, useState} from 'react'
import axios from "axios"
import {Container, Row, Col, Form, FormControl, Button, Breadcrumb} from "react-bootstrap"
import Context from './Context/Context'
import { Link } from 'react-router-dom'
import PreLoader from '../components/PreLoader'


 function Youtube({Config}) {
    const [Progress, setProgress] = useState(false)
    const [url, seturl] = useState({yurl:"", params:"", valid:null, msg:""})
    const getopt = ()=>{
        // && url.yurl.startsWith("https://www.youtube.com/watch?v=")
        // && url.yurl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        if (url.yurl.length >20  ) {
            seturl({...url, valid:true})
            const id = url.yurl.substring(url.yurl.length, url.yurl.indexOf("=")+1);
            const yurl = `${Config.BackendLink}/download/${id}?quality=${url.params}`;
            if (url.yurl.length > 10){
            setProgress(true)
            axios.get(yurl)
            .then(res=>{
                window.location.href =yurl
                setProgress(false)
            })
            .catch(err => {
                setProgress(false)
                console.error(err); 
            })
        }
            
        }else{
            console.log('no');
            seturl({...url, valid:false, msg:"Oops !! Please Enter valid Youtube URL :"})

        }

    }

    
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
                    <Col  md={8}>
                    {!url.valid ? <h6 style={{color:"red",textAlign: "start"}}>{url.msg}</h6> : ""}
                    { !Progress ?
                    
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
                    </Form> : <PreLoader show={true} />}
                    </Col>
                    <Col md={2}></Col>

                </Row>
        </Container>
        </Context>
        </>
    )
}
export default Youtube;
