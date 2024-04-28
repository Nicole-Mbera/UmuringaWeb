import { React, useState, useEffect } from "react";
import DashLayout from "../../components/dashLayout";
import axios from "axios";
import { Space, Table, Modal, Button, Input, message } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";



const Messages = () => {
 const columnOne = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
        title: "telephone",
        dataIndex: "telephone",
        key: "telephone",
      },
  
      {
        title: "message",
        dataIndex: "message",
        key: "message",
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
            <EditOutlined/>
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

  const [Message, setMessage] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const handleDelete = (id) => {
    console.log("id to delete", id);
    axios
      .delete("https://tiny-blue-wildebeest-shoe.cyclic.app/message/sms/" + id)
      .then((resp) => {
       setMessage(Message.filter((item) => item._id != id));
        console.log(`Item with Id ${id} has been deleted!!`);
      })
      .catch((error) => console.log(error));
  };
  const fetchMessage = () => {
    setIsFetching(true);
    axios
      .get("https://tiny-blue-wildebeest-shoe.cyclic.app/message/allMessages")
      .then((res) => {
       setMessage(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <DashLayout>
        <h2 style={{ textAlign: "center", fontSize: "40px"}}>Messages</h2>
        
        <Table
          style={{ width: "80%", marginLeft: "250px", position:"relative"}}
          columns={columnOne}
          dataSource={Message}
        />
        
      </DashLayout>
    
      
    </>
  );
};

export default Messages;