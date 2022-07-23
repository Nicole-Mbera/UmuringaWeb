import React from "react";
import DashLayout from "../../components/dashLayout"
import "./registerProduct.css"
import {Button, Upload,Input,Form} from "antd"
import {UploadOutlined} from "@ant-design/icons"

const RegisterProduct = () => {
  return(

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
              <Input placeholder="Product name" style={{padding:"10px", marginTop:"20px", width:"70%"}} />
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
              <Input placeholder="Description" style={{padding:"10px", width:"70%"}} />
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
              <Input placeholder="price"  style={{padding:"10px", width:"70%"}}/>
            </Form.Item>
            
            
 <Upload><Button icon={<UploadOutlined />} style={{ width:160, marginTop:"30px"}}>Upload Image</Button></Upload>
 <Button  type="primary" htmlType="submit">Submit</Button>
 </Form>
 </div>

</DashLayout>
    </div>  
    
 );
};
export default RegisterProduct;
