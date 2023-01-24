import React, { useState } from "react";
import axios from "axios";
import DashLayout from "../../components/dashLayout";
import "./registerProduct.css";
import { Button, Upload, Input, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const RegisterProduct = () => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [productPicture, setProductPicture] = useState("");

  const handleProduct = (e) => {
    e.preventDefault();
    console.log(name, discription, price, productPicture);

    axios
      .post("http://localhost:7000/product/registerProduct", {
        name,
        discription,
        price,
        productPicture,
      })
      .then((e) => {
        setName("");
        setDiscription("");
        setPrice("");
        setProductPicture("");
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
                style={{ padding: "10px", marginTop: "20px", width: "70%" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            {/* <Form.Item
              name="product picture"
              rules={[
                {
                  required: true,
                  message: "Please input the number of available products!",
                },
              ]}
            >
              <Input placeholder="Available Products" style={{padding:"10px", width:"70%"}} />
            </Form.Item> */}
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
                style={{ padding: "10px", width: "70%" }}
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
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
                style={{ padding: "10px", width: "70%" }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="productPicture">
              <Input
                placeholder="product image"
                type="link"
                style={{ padding: "10px", width: "70%" }}
                value={productPicture}
                onChange={(e) => setProductPicture(e.target.value)}
              />
            </Form.Item>

            {/* <Upload><Button icon={<UploadOutlined />} style={{ width:160, marginTop:"30px"}}>Upload Image</Button></Upload> */}
            <Button type="primary" htmlType="submit" onClick={handleProduct}>
              Submit
            </Button>
          </Form>
        </div>
      </DashLayout>
    </div>
  );
};
export default RegisterProduct;
