import { useState } from "react";
import MainPage from "../pages/MianPage";

export default function Modal({ message }) {
  const [modal, setModal] = useState(true);
  return (
    <>
      {modal ? (
        <div className="flex items-center justify-center bg-black/50 h-screen">
          <div className="w-[30rem] h-[15rem] bg-white rounded shadow-lg flex justify-center items-center">
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-5 bg-white px-[1rem] rounded-[0.5rem] text-cyan-800 hover:cursor-pointer hover:bg-cyan-800 hover:text-white transition"
            >
              {"\u00d7"}
            </button>
            <h2 className="text-cyan-700 text-[1.3rem]">{message}</h2>
          </div>
        </div>
      ) : (
        <MainPage />
      )}
    </>
  );
}
