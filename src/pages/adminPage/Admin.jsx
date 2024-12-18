import { Input, Form, Drawer, TimePicker } from "antd";
import { Button, Checkbox, Fab } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import "../../App.css";
import img from "../../images/img.png";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import uzb from "../../images/uzb.svg";
import rus from "../../images/rus.svg";
import eng from "../../images/usa.svg";
import { FaCheck } from "react-icons/fa";
import "./admin.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaMinus } from "react-icons/fa";

export default function Admin() {
  const [lang, setLang] = useState();

  dayjs.extend(customParseFormat);
  const onChangeOpenTime = (time, timeString) => {
    console.log(time, timeString);
  };
  const onChangeCloseTime = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleRestourantValues = (data) => {
    console.log(data);
  };

  // Drawer uchun
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Drawer uchun
  const [openMoney, setOpenMoney] = useState(false);
  const showDrawerMoney = () => {
    setOpenMoney(true);
  };
  const onCloseMoney = () => {
    setOpenMoney(false);
  };

  const handleChecklang = (lang) => {
    setLang(lang);
  };

  const weekDays = [
    { day: "d", value: "dushanba" },
    { day: "s", value: "dushanba" },
    { day: "c", value: "dushanba" },
    { day: "p", value: "dushanba" },
    { day: "j", value: "dushanba" },
    { day: "s", value: "dushanba" },
    { day: "y", value: "dushanba" },
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked(!checked); // Checkbox holatini o'zgartirish
  };
  return (
    <div>
      <div className="container max-w-[420px] mx-auto px-4 py-10 text-white">
        <h1 className="text-[24px] font-[500] mb-3">Restourant</h1>

        {/* Drawer vaqt uchun */}
        <div>
          <Drawer
            title="Ishlash kuni va vaqtini tanlash"
            placement="bottom"
            closable={false}
            onClose={onClose}
            open={open}
            key="bottom"
          >
            <div>
              <div className="summ bg-gray-800 rounded-xl ">
                <div className="sumBtn">
                  {weekDays.map((item) => (
                    <Fab key={item.value} color="primary" aria-label="add">
                      {item.day}
                    </Fab>
                  ))}
                </div>
                <div
                  className="sumBtn  "
                  id="hour"
                  style={{ padding: "0px !important" }}
                >
                  <Button
                    onClick={handleButtonClick}
                    className=" w-full "
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>24 Soat</p>
                    <Checkbox
                      {...label}
                      aria-label="Checkbox demo"
                      checked={checked} // Checkbox holatini statega asoslab boshqarish
                      onChange={() => setChecked(!checked)}
                      style={{ color: "#fff" }}
                    />
                  </Button>
                </div>
                {!checked && (
                  <div
                    className="sumBtn  "
                    style={{ padding: "0px !important" }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <p>Hours</p>
                      <div className="flex items-center gap-2">
                        <TimePicker
                          onChange={onChangeOpenTime}
                          format={"hh:mm"}
                          defaultOpenValue={dayjs("09:00", "HH:mm")}
                          className="bg-gray-900 focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-900 border-none focus:outline-none h-[30px] px-2 active:outline-none hover:outline-none p-0 w-[70px] "
                        />
                        <FaMinus />
                        <TimePicker
                          onChange={onChangeCloseTime}
                          format={"hh:mm"}
                          defaultOpenValue={dayjs("22:30", "HH:mm")}
                          className="bg-gray-900 focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-900 border-none focus:outline-none h-[30px] px-2 active:outline-none hover:outline-none p-0 w-[70px] "
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Drawer>
        </div>

        {/* Drawer pul uchun Currency */}
        <div>
          <Drawer
            title="Currency"
            placement="bottom"
            closable={false}
            onClose={onCloseMoney}
            open={openMoney}
            key="bottom"
          >
            <div className="flex flex-col justify-between h-full">
              <div className=" bg-gray-800 rounded-xl summ">
                <Button
                  className="flex w-full sumBtn"
                  style={{
                    borderRadius: "0",
                    color: "#fff",
                    justifyContent: "start",
                  }}
                  onClick={() => handleChecklang("uzb")}
                >
                  <div className="birlig w-full]">
                    <p>SOM L</p>
                  </div>
                  <div className="flex justify-between items-center w-[80%] ">
                    <div className="flex items-center gap-2">
                      <img src={uzb} alt="Uzb flag" className="w-[30px]" />
                      <p>Uzbekiston so&apos;mi</p>
                    </div>
                    <div>
                      <span>{lang === "uzb" ? <FaCheck /> : ""}</span>
                    </div>
                  </div>
                </Button>
                <Button
                  className="flex w-full sumBtn"
                  style={{
                    borderRadius: "0",
                    color: "#fff",
                    justifyContent: "start",
                  }}
                  onClick={() => handleChecklang("rus")}
                >
                  <div className="birlig w-full]">
                    <p>RUB ₽</p>
                  </div>
                  <div className="flex justify-between items-center w-[80%] ">
                    <div className="flex items-center gap-2">
                      <img src={rus} alt="Uzb flag" className="w-[30px]" />
                      <p>Rassiya Rubli</p>
                    </div>
                    <div>
                      <span>{lang === "rus" ? <FaCheck /> : ""}</span>
                    </div>
                  </div>
                </Button>
                <Button
                  className="flex w-full sumBtn"
                  style={{
                    borderRadius: "0",
                    color: "#fff",
                    justifyContent: "start",
                  }}
                  onClick={() => handleChecklang("usa")}
                >
                  <div className="birlig w-full]">
                    <p>USD $</p>
                  </div>
                  <div className="flex justify-between items-center w-[80%] ">
                    <div className="flex items-center gap-2">
                      <img src={eng} alt="Uzb flag" className="w-[30px]" />
                      <p>Amerika dollori</p>
                    </div>
                    <div>
                      <span>{lang === "usa" ? <FaCheck /> : ""}</span>
                    </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button className="btn w-full">Saqlash</Button>
              </div>
            </div>
          </Drawer>
        </div>
        <Form onFinish={handleRestourantValues}>
          <div>
            <Form.Item name="restaurantName">
              <Input placeholder="Name" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="currency">
              <Button
                onClick={showDrawerMoney}
                className="btnOutline w-full flex justify-between"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span className="block">Currency</span>{" "}
                <span className="flex items-center gap-2">
                  So&apos;m <IoIosArrowForward />
                </span>
              </Button>
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

          {/* Ishlash soatlarini qo'shish uchun pasdan menyu chiqarish */}

          <div>
            <div className="mb-4">
              <Button className="btnOutline w-full"></Button>
            </div>
            <Button className="btnOutline w-full" onClick={showDrawer}>
              Add working hour
            </Button>
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
              <p className="text-slate-400 font-[300]">
                Mehmonlar uchun nima qila olasiz
              </p>
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
