import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Card({ Product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", { state: Product });
  };

  return (
    <>
      <div className="md:hidden p-1 card bg-base-100 shadow-sm rounded-lg flex flex-col">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="md:hidden relative w-full h-37"
        >
          <video
            src={Product?.video?.secure_url}
            className="object-cover w-full h-full rounded"
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
          />
        </motion.div>
        <div className="p-1 flex flex-col justify-between space-y-1">
          <h2 className="text md:hidden font-bold text-center">
            {Product?.name}
          </h2>
          <p className="md:hidden text text-gray-500">{Product.description}</p>
          <div className="md:hidden flex space-x-1 justify-between items-center">
            <p className="md:hidden text-xs text-green-600 font-bold">
              Price: ${Product?.price}
            </p>
            <p className="md:hidden text-xs text-gray-400">
              {Product?.category?.name}
            </p>
          </div>
          <button
            className="md:hidden flex justify-center items-center mt-2 px-2 py-1 bg-blue-500 text-white text rounded"
            onClick={handleClick}
          >
            Details
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="bg-base-100 shadow-xl flex ">
          <figure>
            <video
              src={Product.video.secure_url}
              className="object-cover w-[40rem] md:h-[12rem] lg:h-[14rem] rounded"
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            />
          </figure>
          <div className="w-[55rem] flex flex-col justify-around items-center">
            <div className="flex flex-col space-y-1">
              <h2 className="card-title"> {Product?.name}</h2>
              <p>{Product?.description}</p>
            </div>

            <div className="flex space-x-1 justify-between items-center w-[90%]">
              <p className="text-sm text-green-600 font-bold">
                Price: ${Product?.price}
              </p>
              <p className="text-sm text-gray-400">{Product?.category?.name}</p>
            </div>
            <button
              className="flex justify-center items-center mt-2 px-2 py-1 bg-blue-500 text-white text rounded"
              onClick={handleClick}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
