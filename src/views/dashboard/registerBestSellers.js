import React, { useState } from "react";
import axios from "axios";
import DashLayout from "../../components/dashLayout";
import "./registerBestSellers.css";
import { Button, Upload, Input, Form } from "antd";

const RegisterBestSellers = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productPicture, setProductPicture] = useState([]);

  const handleProduct = (e) => {
    e.preventDefault();
    console.log(name, description, price, productPicture);

    axios
      .post("https://tiny-blue-wildebeest-shoe.cyclic.app/sellers/registerProduct", {
        name,
        description,
        price,
        productPicture,
      })
      .then((response) => {
        setName("");
        setDescription("");
        setPrice("");
        setProductPicture([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-container">
      <DashLayout>
        <div className="registering">
          <h1>Register product</h1>
          <Form>
          <Form.Item
              name="ProductName"
              rules={[
                {
                  required: true,
                  message: "Please input your the product name!",
                },
              ]}
            >
              <Input
                placeholder="Product name"
                style={{ padding: "10px", width: "70%", marginTop:"20px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            
            <Form.Item
              name="Description"
              rules={[
                {
                  required: true,
                  message: "Please input the product Description!",
                },
              ]}
            >
              <Input
                placeholder="Description"
                style={{ padding: "10px", width: "70%", marginTop:"20px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input price!",
                },
              ]}
            >
              <Input
                placeholder="price"
                style={{ padding: "10px", width: "70%", marginTop:"20px" }}
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Item>
            
            <Form.Item name="productPicture">
              <Input
                placeholder="product image"
                type="link"
                className="product-picture"
                style={{ padding: "10px", width: "70%", marginTop: "20px" }}
                value={productPicture.join(",")} // Display the array as comma-separated strings
                onChange={(e) => setProductPicture(e.target.value.split(","))} // Split the string into an array of strings
              />
            </Form.Item>

            {/* ...other form items */}
            
            <Button type="primary" htmlType="submit" onClick={handleProduct} style={{ marginTop: "20px", padding: "10px" }}>
              Submit
            </Button>
          </Form>
        </div>
      </DashLayout>
    </div>
  );
};

export default RegisterBestSellers ;