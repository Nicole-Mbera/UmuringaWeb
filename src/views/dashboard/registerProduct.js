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
        label="Product"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input the product name!',
          },
        ]}
      >
        <Input style={{marginLeft:"22px", width:"500px", padding:"10px"}}/>
      </Form.Item>
      <Form.Item
        label="description"
        name="paragraph"
        rules={[
          {
            required: true,
            message: 'Please input the product description !',
          },
        ]}
      >
        <Input style={{marginLeft:"22px", width:"500px", padding:"10px"}}/>
      </Form.Item>
      <Form.Item
        label="Price"
        name="amount"
        rules={[
          {
            required: true,
            message: 'Please input the product price!',
          },
        ]}
      >
        <Input style={{marginLeft:"22px", width:"500px", padding:"10px"}}/>
      </Form.Item>
 <Upload><Button icon={<UploadOutlined />} style={{ width:160, height: "4.5vh", marginLeft:"157px", marginTop:"60px"}}>Upload Image</Button></Upload>
 <Button  type="primary" htmlType="submit" className="submit">Submit</Button>
 </Form>
 </div>

</DashLayout>
    </div>  
    
 );
};
export default RegisterProduct;
