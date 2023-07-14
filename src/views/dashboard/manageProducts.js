import { React, useState, useEffect } from "react";
import DashLayout from "../../components/dashLayout";
import "./manageProduct.css";
import axios from "axios";
import { Space, Table, Modal, Button, Input } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import EditProduct from "../../components/EditProduct.js"


const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const columnOne = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "action",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>
            <EyeOutlined />
          </a>
          <a>
            <EditOutlined
              onClick={() => {
                showModal();
                setCurrentProduct(record);
              }}
            />
          </a>
          <a>
            <DeleteOutlined
              onClick={() =>
                // confirm(`Are you sure you want to delete ${record.name} ?`) &&
                handleDelete(record._id)
              }
            />
          </a>
        </Space>
      ),
    },
  ];

  const [product, setProduct] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const handleDelete = (id) => {
    console.log("id to delete", id);
    axios
      .delete("https://tiny-blue-wildebeest-shoe.cyclic.app/product/shoe/" + id)
      .then((resp) => {
        setProduct(product.filter((item) => item._id != id));
        console.log(`Item with Id ${id} has been deleted!!`);
      })
      .catch((error) => console.log(error));
  };
  const fetchProducts = () => {
    setIsFetching(true);
    axios
      .get("https://tiny-blue-wildebeest-shoe.cyclic.app/product/allproducts")
      .then((res) => {
        setProduct(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <DashLayout>
        <h2 style={{ textAlign: "center", fontSize: "40px"}}>Products</h2>
        
        <Table
          style={{ width: "80%", marginLeft: "250px", position:"relative"}}
          columns={columnOne}
          dataSource={product}
        />
        

      </DashLayout>
      <EditProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentProduct={currentProduct}
        fetchedProducts={fetchProducts}
      />

    </>
  );
};

export default Products;
