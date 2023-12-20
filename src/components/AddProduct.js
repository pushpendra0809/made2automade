import React, { useState } from "react";
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

const AddProduct = () => {
  function getImageFileObject(imageFile) {
    console.log({ imageFile })
  }

  function runAfterImageDelete(file) {
    console.log({ file })
  }

  const [data, setData] = useState({ name: "", productID: "", manufacturername: "", productDescription: "", quantity:"" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
    console.log(data, "Successfully Submitted");
  };
  
  return (
    <>
      <div className="form1" id="form">
        <form onSubmit={handleSubmit}>
          <h1>Add<span>Product</span></h1>

          <div className="fileuploader">
          <ImageUploader
           onFileAdded={(img) => getImageFileObject(img)}
           onFileRemoved={(img) => runAfterImageDelete(img)}
          />
          <div>
          <button href="#" className="btn btn-primary mx-1 my-4" type="button" >Edit Details</button>
          </div>
          </div>

          <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Add Product Name..." />
          <input type="text" name="productID" onChange={handleChange} value={data.productID} placeholder="Product Id" />
          <input type="text" name="manufacturername" onChange={handleChange} value={data.manufacturername} placeholder="Manufacturer Name" />
          <input type="text" name="productDescription" onChange={handleChange} value={data.productDescription} placeholder="Product Description" />
          <input type="number" name="quantity" onChange={handleChange} value={data.quantity} placeholder="Product Quantity" />
          <div classname="dropdown">
            <h4>Select Category
            <button classname=" dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              New Stock 
             </button></h4>
              <ul classname="dropdown-menu">
                <li><a classname="dropdown-item" href="#">Action</a></li>
                <li><a classname="dropdown-item" href="#">Another action</a></li>
                <li><a classname="dropdown-item" href="#">Something else here</a></li>
               </ul>
            </div>
          <div className="master-btn">
            <a href="#" className="btn btn-danger mx-1 my-4">Edit Details</a>
          <button className="btn btn-primary  send mx-2 my-2" type="submit">send</button>
         </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
