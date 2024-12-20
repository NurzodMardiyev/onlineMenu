import { Form } from "antd";
import { Button } from "@mui/material";
import "./auth.css";
import "../../App.css";
// import { Button } from "aceternity-ui";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const textRef = useRef(null);
  // Matn qismlari
  const texts = [
    "Restarantlar uchun",
    "Fast food korxonalari uchun",
    "Qaxvahona, barlar uchun",
    "Choyhonalar uchun",
  ];

  useEffect(() => {
    gsap.registerPlugin(TextPlugin); // TextPlugin'ni ro'yxatga olish

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Cheksiz qaytarish

    // Har bir qism uchun animatsiya qilish
    texts.forEach((text) => {
      timeline
        .to(textRef.current, {
          text: text, // Har bir qismni yozish
          duration: 2, // Yozish vaqti
          ease: "power2.inOut",
        })
        .to(textRef.current, {
          text: "", // O'chirish
          duration: 1, // O'chirish vaqti
          delay: 1, // O'chirishdan oldin 1 soniya kutish
          ease: "power2.inOut",
        });
    });

    return () => {
      timeline.kill(); // Komponent unmount bo'lganda animatsiyani tozalash
    };
  }, [texts]);

  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("dashboard");
  };
  return (
    <div className="bg-gray-400 w-full h-screen landing">
      <div className="overlay bg-[#0000006a]">
        <div className="container max-w-[420px] mx-auto px-4 text-white flex flex-col justify-between  h-screen py-10">
          <div></div>
          <div>
            <div className="text-center">
              <h1 className="title text-[38px] font-700">Xush kelibsiz!</h1>
              <p
                ref={textRef}
                className="text-white text-center  h-[70px] text-xl"
              ></p>
            </div>
          </div>
          <div className="">
            <Button
              onClick={toDashboard}
              type="submit"
              className="w-full h-[42px] btn "
            >
              Davom etish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
