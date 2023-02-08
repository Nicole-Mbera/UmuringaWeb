import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";
import axios from "axios";

export default function EditProduct({
  isModalOpen,
  setIsModalOpen,
  currentProduct,
  fetchedProducts,
}) {
  const [name, setName] = useState(currentProduct.name);
  const [price, setPrice] = useState(currentProduct.price);
  const [productPicture, setProductPicture] = useState(
    currentProduct.productPicture
  );
  const [discription, setDiscription] = useState(currentProduct.description);
  const [procuctId, setProcuctId] = useState(currentProduct._id);
  const handleOk = () => {
    // setIsModalOpen(false);
    // console.log("Hello modal");
    axios
      .patch("http://localhost:7000/product/shoe/" + procuctId, {
        productPicture,
        name,
        description: discription,
        price,
      })
      .then((resp) => {
        setIsModalOpen(false);
        fetchedProducts();
        // console.log("product updated", resp);
      })
      .catch((error) => console.log(error));
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setName(currentProduct.name);
    setPrice(currentProduct.price);
    setDiscription(currentProduct.description);
    setProductPicture(currentProduct.productPicture);
    setProcuctId(currentProduct._id);
  }, [currentProduct]);

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>product name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <label>price</label>
        <Input
          placeholder="price"
          value={price}
          onChange={(e) => {
            // console.log("Event RUnaka", e);
            setPrice(e.target.value);
          }}
        />
        <label>Discription</label>
        <Input
          placeholder="discription"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <label>image</label>
        <Input
          placeholder="image"
          value={productPicture}
          onChange={(e) => setProductPicture(e.target.value)}
        />
      </Modal>
    </div>
  );
}
