import { Button } from "@mui/material";
import rings from "../images/rings.png";
import document from "../images/document.png";
import cartImg from "../images/img.png";
import tell from "../images/tell.png";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import "../App.css";
import { Link } from "react-router-dom";

export default function Services() {
  const [turnOn, setTurnOn] = useState(false);
  const [turnOnDoc, setTurnOnDoc] = useState(false);
  const [turnOnCart, setTurnOnCart] = useState(false);
  const [turnOnTell, setTurnOnTell] = useState(false);
  const servicesEll = [
    {
      id: 1,
      name: "Waiter Call",
      setItem: setTurnOn,
      item: turnOn,
      img: rings,
    },
    {
      id: 2,
      name: "Orders",
      setItem: setTurnOnDoc,
      item: turnOnDoc,
      img: document,
    },
    {
      id: 3,
      name: "Cart",
      setItem: setTurnOnCart,
      item: turnOnCart,
      img: cartImg,
    },
    {
      id: 4,
      name: "What's missing?",
      setItem: setTurnOnTell,
      item: turnOnTell,
      img: tell,
    },
  ];
  return (
    <div>
      <div className="container max-w-[420px] mx-auto px-4 py-10 text-white flex flex-col justify-between h-screen ">
        <div className="">
          <div className="flex items-end gap-4 mb-4">
            <Link to="/dashboard">
              <Button
                className=""
                style={{ background: "#1F2937", padding: "15px" }}
              >
                <div className="text-[18px]">
                  <IoArrowBackOutline className="text-[18px] font-[600] text-white" />
                </div>
              </Button>
            </Link>
            <h1 className="text-[24px] font-[500]">Services</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {servicesEll.map((item) => (
              <div
                key={item.id}
                className={`col-span-1 rounded-xl ${
                  item.id === 4 ? "bg-[#FFE4C6]" : "bg-gray-800 "
                }  w-full`}
              >
                <Button
                  className="bg-[#1F2937] flex flex-col items-center w-full "
                  style={{
                    padding: "20px 10px",
                    textTransform: "none",
                    color: `${item.id === 4 ? "red" : ""}`,
                  }}
                  onClick={() => {
                    item.setItem(!item.item);
                  }}
                >
                  <div className="max-w-[100px]">
                    <img src={item.img} alt="ring" className="w-full" />
                  </div>
                  <p
                    className={` ${
                      item.id === 4 ? "text-gray-900" : "text-white"
                    }  font-[500] text-[16px]`}
                  >
                    {item.name}
                  </p>
                  {item.id === 4 ? (
                    <div className="mt-2">
                      <p className="text-[16px] font-[600] text-gray-900 ">
                        Tell us
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 ">
                      <p
                        className={`w-[50px] h-[20px] relative flex items-center ${
                          item.item ? "bg-[#35365b]" : " bg-[#353537]"
                        } rounded-full`}
                      >
                        <span
                          className={`w-[30px] h-[30px] rounded-full  flex absolute transform shadow-sm ${
                            item.item
                              ? "translate-x-[20px] bg-[#494778]"
                              : "translate-x-[0px] bg-[#5E5E60]"
                          } transition-transform duration-150`}
                        ></span>
                      </p>
                    </div>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Button className="btn w-full">Saqlash</Button>
        </div>
      </div>
    </div>
  );
}
