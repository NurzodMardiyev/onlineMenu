import { Form, Input } from "antd";
import { Button } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import "../../App.css";
import img from "../../images/img.png";

export default function Admin() {
  const handleRestourantValues = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="container max-w-[420px] mx-auto px-4 py-10 text-white">
        <h1 className="text-[24px] font-[500] mb-3">Restourant</h1>
        <Form onFinish={handleRestourantValues}>
          <div>
            <Form.Item name="restaurantName">
              <Input placeholder="Name" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="adress">
              <Input placeholder="Adress" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="description">
              <TextArea
                placeholder="Description: Hamma narsalaringiz borligini kiriting. misol uchun tekin WiFi"
                cols={10}
                rows={5}
              ></TextArea>
            </Form.Item>
          </div>
          <div>
            <Form.Item name="number">
              <Input placeholder="Number" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="wenLink">
              <Input placeholder="Web Link" />
            </Form.Item>
          </div>
          <div>
            <Button className="btnOutline w-full">Add working hour</Button>
          </div>

          <Button
            className="services bg-gray-800 rounded-md mt-4 p-3 flex relative"
            style={{
              padding: "12px",
              width: "100%",
              backgroundColor: "#1F2937",
              textTransform: "none",
              marginTop: "20px",
              color: "#DAA428",
              display: "flex",
              justifyContent: "left",
              textAlign: "start",
            }}
          >
            <div>
              <h3 className="text-white text-[17px]">Services</h3>
              <p className="text-slate-400">Mehmonlar uchun nima qila olasiz</p>
            </div>
            <div className="absolute right-0 top-0">
              <img src={img} alt="" className="w-[100px]" />
            </div>
          </Button>

          <div className="mt-5">
            <Button className="addbtn ">
              + add <br /> restourant photo
            </Button>
          </div>
          <div className="my-4">
            <Button className="btnOutline w-full " style={{ color: "red" }}>
              Delete Restourant
            </Button>
          </div>
          <div className="w-full flex">
            <Button type="submit" className="w-full btn">
              Saqlash
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
