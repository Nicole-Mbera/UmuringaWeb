import React from "react";
import DashLayout from "../../components/dashLayout"
import "./manageProduct.css"
import ProductContent from "../../assets/constants/product.json"
import {Space,Table} from "antd";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import"antd/dist/antd.css";
const columnOne=[
    {
        title:"Product Name",
        dataIndex:"ProductName",
        key:"ProductName"
    },

    {
        title:"price",
        dataIndex:"price",
        key:"price"
    },
    
//     {
//     title:"Product Number",
//     dataIndex:"Product Number",
//     key:"Product Number"
// },

// {
//     title:"Status",
//     dataIndex:"status",
//    key:"status"
// },
{ title:"description",
dataIndex:"description",
key:"description"
},

{ title:"picture",
dataIndex:"productPicture",
key:"picture"
},



{
    title:"action",
    dataIndex:"action",
    render: (text, record)=>(
        <Space size="middle">
            <a ><EyeOutlined/></a>
            <a><EditOutlined/></a>
            <a><DeleteOutlined/></a>
        </Space>
    )
},
]
const Products=()=>{
    return (
        <DashLayout>
         <h2 style={{textAlign:'center', fontSize:'40px'}}>Products</h2>
        <Table style={{width:'80%',marginLeft:'250px',height:'90vh'}} columns={columnOne} dataSource={ ProductContent}/>
        </DashLayout>
    )

    }

  export default Products;