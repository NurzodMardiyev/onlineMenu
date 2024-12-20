import { Button } from "@mui/material";
import { FaUserCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import photo from "../../images/photo.jpg";
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div>
      <div className="container max-w-[420px] mx-auto px-4 text-white py-10">
        <div className="flex items-end gap-4 mb-4">
          <Link to="/dashboard">
            <Button
              className=""
              style={{
                background: "#1F2937",
                padding: "10px",
              }}
            >
              <div className="text-[28px]">
                <FaUserCheck className="text-[24px] font-[600] text-white" />
              </div>
            </Button>
          </Link>
          <h1 className="text-[24px] font-[500]">Buble Food</h1>
        </div>
        <div>
          <div className="ronunded-xl w-full h-[200px]">
            <img
              src={photo}
              alt="Restaran Name"
              className="rounded-xl h-full w-full object-cover"
            />
          </div>
          <div className="categories mt-4 ">
            <div className="editCategory absolute bg-gray-900 pe-1 shadow-xl rounded-r-xl">
              <Link className="p-2 bg-white text-gray-900 inline-flex text-[24px] rounded-xl  w-[40px] h-[40px]">
                <MdOutlineEdit />
              </Link>
            </div>
            <div className="flex items-center gap-[10px] overflow-x-scroll overflow-y-hidden scrollbar-hide">
              {/* Categories bu section backenddan keladi map boladi */}
              <div className="ms-[50px] flex gap-[10px]">
                <div className="py-2 px-4 rounded-full bg-white text-gray-900 h-[40px] flex items-center ">
                  <p className="font-[500]">Ichimlik</p>
                </div>
                <div className="py-2 px-4 rounded-full bg-white text-gray-900 h-[40px] flex items-center ">
                  <p className="font-[500]">Ichimlik</p>
                </div>
                <div className="py-2 px-4 rounded-full bg-white text-gray-900 h-[40px] flex items-center ">
                  <p className="font-[500]">Ichimlik</p>
                </div>
              </div>

              {/* Add Categories */}
              <Link className="py-2 cursor-pointer px-4 rounded-full text-[#5959FB] h-[40px] flex items-center border  w-full whitespace-nowrap border-[#5959FB] border-dashed">
                + add category
              </Link>
            </div>
          </div>
          {/* Categoriay bo'yicha maxsulot qo'shish */}
          <div>
            <div className="flex justify-between items-center mt-5 ">
              <h2 className="text-[22px] ">Ichimlik</h2>
              <Link className="p-2 bg-white text-gray-900 inline-flex text-[22px] rounded-xl  ">
                <FaPlus />
              </Link>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-4">
              <div className="col-span-6 rounded-xl bg-gray-800 text-white h-[220px]">
                <img
                  src={photo}
                  alt="maxsulot nomi"
                  className="rounded-t-xl h-[100px] w-full object-cover"
                />
                <div className="p-[12px] ">
                  <div className="">
                    <h4>12.000 s.</h4>
                    <p className="text-[12px] text-slate-200 font-[300] mt-1">
                      Pepsi-cola
                    </p>
                  </div>
                  <span className="text-[12px] text-slate-400 block mt-[30px]">
                    2 kg
                  </span>
                </div>
              </div>
              <Link className="col-span-6 rounded-xl bg-gray-800 text-[#5959FB] h-[220px] border border-dashed border-[#5959FB] flex items-center justify-center text-center">
                <Button
                  style={{
                    width: "100%",
                    height: "100%",
                    textTransform: "none",
                  }}
                >
                  <p>
                    + <br /> add <br /> item
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
