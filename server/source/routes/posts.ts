import express from 'express';
import controller from '../controllers/posts';
const ImageModel=require("../models/Image")
const router = express.Router();

router.get('/', controller.home);
router.get('/finduser', controller.finduser);
router.get('/finduseremail', controller.finduserByemail);

router.post('/adduser',controller.adduser)
router.post('/upload',async(req:any,res)=>{
    const tempDate=Date.now()
    const ImageDataStored = ImageModel({
      imgName: tempDate,
      imgData: req.body.imageData,
      joindate:tempDate
    });
    await ImageDataStored.save().then((result:any) => {
      console.log("image stored!!");
      res.send({ message: tempDate });
    });
    
})
router.get('/images/:imgname',async(req,res)=>{
        const ImageObj = await ImageModel.findOne({ imgName: req.params.imgname });
        console.log(ImageObj)
        const imgdata = ImageObj.imgData.split(",")[1]; // Extract the base64 data part
        const imageBuffer = Buffer.from(imgdata, "base64");
      
        res.setHeader("Content-Type", "image/png");
        res.end(imageBuffer);
})

// router.put('/updatecart',controller.updateCart)
router.post('/postproduct',controller.postProduct)
router.get('/products',controller.getProducts)
router.get('/products/:id',controller.getSingleProduct)
export = router;