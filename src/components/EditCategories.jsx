import { Button } from "@mui/material";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import { IoMdMove } from "react-icons/io";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div className="flex items-center justify-between w-full">
      <div
        ref={(node) => ref(drop(node))}
        className="flex items-center justify-between  text-white py-2  gap-2 rounded cursor-pointer"
      >
        <span className="cursor-move text-[20px]">
          <IoMdMove />
        </span>
        <span>{item.content}</span>
      </div>
      <div>
        <div className="flex items-center gap-1 ">
          <p className="text-slate-400">{item.count}</p>
          <FaAngleRight className="text-[18px]" />
        </div>
      </div>
    </div>
  );
};
export default function EditCategories() {
  const categories = [
    { id: 0, name: "Ichimlik", count: 2, path: "/id" },
    { id: 1, name: "Ovqat", count: 1, path: "/id" },
    { id: 2, name: "Salat", count: 0, path: "/id" },
  ];
  const [items, setItems] = useState([
    { id: "1", content: "Ichimlik", count: 1, path: "/id" },
    { id: "2", content: "Salat", count: 1, path: "/id" },
    { id: "3", content: "Ovqat", count: 1, path: "/id" },
    { id: "4", content: "Urug donlar", count: 1, path: "/id" },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };
  return (
    <div>
      <div className="container max-w-[420px] mx-auto px-4 pb-10 pt-4 text-white flex flex-col justify-between h-screen ">
        {/* <DndProvider backend={HTML5Backend}>
          <div className="space-y-0">
            {items.map((item, index) => (
              <DraggableItem
                key={item.id}
                item={item}
                index={index}
                moveItem={moveItem}
              />
            ))}
          </div>
        </DndProvider> */}
        <div>
          <div className="flex items-center justify-between">
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
              <h1 className="text-[24px] font-[500]">Categories</h1>
            </div>
            <button className=" ">
              <MdOutlineEdit className="text-[24px] mb-3 text-[#5959FB]" />
            </button>
          </div>
          <DndProvider backend={HTML5Backend}>
            <div className=" bg-gray-800 rounded-xl summ">
              {items.map((item, index) => (
                <Link to={item.path} key={item.id} className="cat ">
                  <Button
                    className="flex w-full cate"
                    style={{
                      borderRadius: "0",
                      color: "#fff",
                      justifyContent: "space-between",
                      width: "100%",
                      margin: 0,
                    }}
                  >
                    <DraggableItem
                      key={item.id}
                      item={item}
                      index={index}
                      moveItem={moveItem}
                    />
                    {/* <div className=" w-full flex justify-between">
                      <p>{item.name}</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <p className="text-slate-400">{item.count}</p>
                      <FaAngleRight className="text-[18px]" />
                    </div> */}
                  </Button>
                </Link>
              ))}
            </div>
          </DndProvider>
        </div>
        <div className="mt-3">
          <Button className="btn w-full">Kategoriya qo&apos;shish</Button>
        </div>
      </div>
    </div>
  );
}
