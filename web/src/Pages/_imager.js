<Context>
<Breadcrumb style={{marginTop:"5%"}}>
    <Breadcrumb.Item >
    <Link to="/">
    Home
    </Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item  active>
        Imager
    </Breadcrumb.Item>
</Breadcrumb>


       <Container className="container-fluid" style={{marginTop:"6em", marginBottom:"10px",padding: "50px 0px"}}>

        <Row>
            <Col md={2}></Col>
            
            <Col  md={8} className="col-md-8" style={{height: "100px"}}>
            
            
            {/* <Form inline>
            <Form.File id="formcheck-api-custom" className="col-md-7 mr-2" custom>
            <Form.File.Input onChange={(e)=> validation(e)} isInvalid={Valid ? false : true}    />
            {/* <FormFileIn val={val} /> */}
            {/* <Form.File.Label data-browse="Button text">
                Custom file input
            </Form.File.Label>
            { Valid ? "" : <Form.Control.Feedback type="isInvalid"  >Oops! Try an Image</Form.Control.Feedback> }

            </Form.File>
                    <Form.Control className="mr-3" as="select" custom>
                        <option>Quality</option>
                        <option>MP4 360P</option>
                        <option>MP4 720P</option>
                        <option>MP4 1080P</option>
                        <option>MP3</option>
                    </Form.Control>
                    <Button   variant="info">Donwload</Button>
            </Form> */}
            <h>hhhhhh</h>
            <Cropper
  image={dogImg}
  crop={crop}
  rotation={rotation}
  zoom={zoom}
  aspect={4 / 3}
  onCropChange={setCrop}
  onRotationChange={setRotation}
  onCropComplete={onCropComplete}
  onZoomChange={setZoom}
/>


            </Col>
            <Col md={2}></Col>

        </Row>
</Container>
</Context>











    // const validation = (e) =>{
    //     const file = e.target.files[0]
    //     // console.log(file.type)
    //     // console.log(val)
    //     if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/webp"){
    //         console.log('image')
    //         // console.log(val)
    //         setValid(true)

            
    //     }else{
    //         setValid(false)
    //         console.log('no image')}
    // }
    // const onSelectImageHandler = (files) => {
    //     const file = files[0];
    //     const config = {
    //      headers: {
    //          "Contetnt-Type":"multipart/form-data",
    //          "Access-Control-Allow-Origin": "*",
    //          // "Origin": "*",
    //      }
    //  };
    //      const formData = new FormData();
    //      formData.append('file', file)
    //      axios.post('http://127.0.0.1:5000/download/uploads/', formData, config).then(res => {
    //          console.log(res)
    //        })
           
    //  }

    //  const FormFileIn = ({val}) =>{
    //     const isva = val
    //     // console.log(val)
    //     return(
    //         // onChange={(e)=> validation(e)} val 
    //         <Form.File.Input  onChange={(e)=> validation(e)}  />
    //     )
    //  }
 