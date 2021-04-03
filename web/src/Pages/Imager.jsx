import {React, useCallback} from 'react'
import { Col, Form, Button, Breadcrumb} from "react-bootstrap"
import {useState} from 'react'
import Context from './Context/Context'
import Cropper from 'react-easy-crop'
import Modaldata from './Components/ImgDialog'
import {Link} from 'react-router-dom'
// import {ThemeContext} from "../Pages/Context/ContextConfig";
 // import Breadcrumbs from './Components/breadcrumbs'
// import getCroppedImg from './Components/cropImage'
import getCroppedImg from './Components/cropImage'
export default function Imager( props) { 

    const [Valid, setValid] = useState(true);
    // let val = Valid ? "isValid" : "isInvalid"
    const [Myimage, setMyimage] = useState({image:null, crop:{ x: 0, y: 0 }, Localimg:null, rotation:0, zoom:1,croppedAreaPixels:null, show:false })
    
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState("")
    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/webp"){
        const reader = new FileReader()
            console.log('image')
            setValid(true)

            reader.addEventListener('load', () => {
                setMyimage({...Myimage, image:reader.result, Localimg:file.name})
            }, false)

            if (file) {
                reader.readAsDataURL(file)
            }
      
             }else{
                setValid(false)
                console.log('no image')}
            
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)

      }

    const showCroppedImage = useCallback(async () => {
            try {
            const croppedImage = await getCroppedImg(
                Myimage.image,
                croppedAreaPixels,
                Myimage.rotation
            )
            setCroppedImage(croppedImage)
            setMyimage({...Myimage, show:true})
            } catch (e) {
            console.error(e)
            }
      }, [croppedAreaPixels, Myimage.rotation])
    

 
    return (
        <>
        {Myimage.show ? <Modaldata setMyimage={setMyimage} Myimage={Myimage} croppedImage={croppedImage} Localimg={Myimage.Localimg} /> : ""}
        <Breadcrumb style={{marginTop:"5%"}}>
            <Breadcrumb.Item>
            <Link to="/">
            Home
            </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Imager
            </Breadcrumb.Item>
        </Breadcrumb>
        <Context>
        
            <div className="container" >

                <section className="row demo-crop">
                                <Cropper
                    image={Myimage.image}
                    crop={Myimage.crop}
                    rotation={Myimage.rotation}
                    zoom={Myimage.zoom}
                    aspect={4 / 3}
                    onCropChange={(crop)=>setMyimage({...Myimage, crop:crop})}
                    onRotationChange={(rotation)=>setMyimage({...Myimage, rotation:rotation})}
                    onCropComplete={onCropComplete}
                    onZoomChange={(zoom)=>setMyimage({...Myimage, zoom:zoom})}
                    />
                    
                </section>

            <section className='row mt-3'>
                    <Col md={3}></Col>
                    <Col  md={6} >
                    <Form.Group controlId="formBasicRange">
                            <Form.Label>Rotate</Form.Label>
                            <Form.Control  min={0} and max={360} value={Myimage.rotation} onChange={(e)=>setMyimage({...Myimage, rotation:e.target.value})} type="range"  custom/>
                    </Form.Group>
                    </Col>
                    <Col md={3}></Col>
            </section>


            <section className="row mt-3">
                <Col md={1}></Col>
                
                    <Col  md={10} className="col-md-8" style={{height: "100px"}}>
                        <Form inline>
                        <Form.File id="formcheck-api-custom" className="col-md-7 mr-2" custom>
                            <Form.File.Input  onChange={(e)=> {
                                onInputChange(e);} 
                                } isInvalid={Valid ? false : true}    />
                            <Form.File.Label data-browse="Browse">
                            {Myimage.Localimg}
                            </Form.File.Label>
                            { Valid ? "" : <Form.Control.Feedback type="isInvalid"  >Oops! Try an Image</Form.Control.Feedback> }
                        </Form.File>

                         
                                <Button  onClick={showCroppedImage} variant="info" className="mr-2" >Donwload</Button>

                                <Button  onClick={()=>{setMyimage({...Myimage, image:' ', Localimg:""}) }}  variant="danger">Clear</Button>
                        
                        </Form>
                    </Col>
                <Col md={1}></Col>
            </section>


            </div>
</Context>
        </>
    )


}
