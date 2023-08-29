"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Page = () => {

  const [productDetail, setProductDetail] = useState<any>(
    {
      id: "",
      name: "",
      company: "",
      category: "",
      type: "",
      style: "",
      color: [],
      image: [],
      description: "",
      actual_price: "0",
      discount_price: "0",
      discount_rate: "0",
      sizes: [],
      new: false,
      short_descritiption: "",
      stock: 0,
      reviews: 0,
      stars: 0.0
    })

  const [isUpload, setisUpload] = useState(false)

  const serverpath = "http://localhost:5000/images/"

  function get_user_image_url(arr:any,data64: any) {
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageData: data64 }),
    })
      .then((res) => res.json())
      .then((data) => { 
        arr.push(serverpath + data.message)
      productDetail.image.push(serverpath + data.message)
       }
      );
  }

  var ArrayOfImageUrl: any = []
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name)
    if (name === "image") {
      ArrayOfImageUrl = [...e.target.files]
      console.log("Product details :", productDetail)
      console.log(ArrayOfImageUrl)
      const dataImage = [...ArrayOfImageUrl]
      let arr: any = []
      console.log(dataImage)
      dataImage.map(async (val, i) => {
        var base64Image: any = "";
        const filereader = new FileReader();
        filereader.onload = (file) => {
          base64Image = file.target?.result;
        };
        filereader.readAsDataURL(val);
        
        setTimeout(() => {
          get_user_image_url(arr,base64Image);
        }, 50);
      })
      
      console.log(arr)
      console.log(productDetail)
    console.log("Final product detail : ", productDetail)
  }else if (name === "color" || name === "sizes") {
    const data = value.split(",")
    setProductDetail({ ...productDetail, [name]: data })
  } else {
    setProductDetail({ ...productDetail, [name]: value })
  }



}



const handleUpload = async (e: any) => {

  e.preventDefault()
  try {
    const res = await axios.post("http://localhost:5000/postproduct", productDetail)
    const data = await res.data
    console.log(res)
    console.log(data)
  } catch (e) {
    console.log(e)
  }

}





return (
  <div>
    <form onSubmit={handleUpload} encType="multipart/form-data">

      <label htmlFor="id">Enter product Id :</label>
      <input type="text" onChange={handleChange} name="id" required /><br />

      <label htmlFor="name">Enter product name :</label>
      <input type="text" onChange={handleChange} name="name" required /><br />

      <label htmlFor="company">Enter product company :</label>
      <input type="text" onChange={handleChange} name="company" /><br />

      <label htmlFor="category">Enter product category :</label>
      <input type="text" onChange={handleChange} name="category" required /><br />

      <label htmlFor="type">Enter product type :</label>
      <input type="text" onChange={handleChange} name='type' required /><br />

      <label htmlFor="style">Enter product dress style :</label>
      <input type="text" onChange={handleChange} name="style" /><br />

      <label htmlFor="color">Enter product color :(enter with it&aposs hexacode and seprated by (,))</label>
      <input type="text" onChange={handleChange} name="color" required /><br />

      <input type="file" name="image" onChange={handleChange} multiple required />
      <button onClick={handleUpload}>Upload</button><br />

      <label htmlFor="description">Enter product description</label>
      <input type="text" onChange={handleChange} name="description" /><br />

      <label htmlFor="actual_price">Enter product actual price :</label>
      <input type="text" onChange={handleChange} name='actual_price' required /><br />

      <label htmlFor="discount_price">Enter product discount price :</label>
      <input type="text" onChange={handleChange} name='discount_price' /><br />

      <label htmlFor="discount_rate">Enter product discount percentage :</label>
      <input type="text" onChange={handleChange} name='discount_rate' /><br />

      <label htmlFor="sizes">Enter product available sizes :</label>
      <input type="text" onChange={handleChange} name='sizes' required /><br />

      <label htmlFor="new">Is product in new category :</label>
      <input type="text" onChange={handleChange} name='new' /><br />

      <label htmlFor="short_descritiption">Enter product short descritiption :</label>
      <input type="text" onChange={handleChange} name='short_descritiption' required /><br />

      <label htmlFor="stock">Enter available product stock :</label>
      <input type="text" onChange={handleChange} name='stock' required /><br />

      <label htmlFor="reviews">Enter number of product reviews :</label>
      <input type="text" onChange={handleChange} name="reviews" /><br />

      <label htmlFor="stars">Enter number of stars for product :</label>
      <input type="text" onChange={handleChange} name='stars' />
    </form>



  </div>
)
}

export default Page
