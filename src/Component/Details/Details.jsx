import React from "react";
import { useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { motion } from "framer-motion";

function Details() {
  const { state } = useLocation();
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <h1 className="text-xl font-semibold">{state.name}</h1>
      <div className="flex flex-col justify-center items-center space-y-3 md:flex-row md:w-full md:space-x-8 md:space-y-2 md:p-4">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration:0.5
          }}
          className="relative w-full h-[25rem] md:w-[40%] md:h-[40rem] shadow-2xl"
        >
          <video
            src={state.video.secure_url}
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
        <div className="flex flex-col justify-center items-center space-y-3">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration:0.5
            }}
            className="relative w-full h-[25rem] md:h-[15rem] shadow-2xl"
          >
            <img
              src={state.images[0].optimizeUrl}
              className="object-cover w-full h-full rounded"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration:0.5
            }}
            className="relative w-full h-[25rem] md:h-[15rem] md:shadow-2xl"
          >
            <img
              src={state.images[0].secure_url}
              className="object-cover w-full h-full rounded"
            />
          </motion.div>
        </div>
      </div>
      <div style={{boxShadow: "1px 1px 12px 2px rgba(0,0,0,0.10)"}} className="w-full flex flex-col justify-center items-center space-y-2 my-4 rounded py-4">
        <div className="transform -translate-x-20 md:-translate-x-47">
          {state.description}
        </div>
        <div className="flex justify-between items-center space-x-6 md:space-x-60">
          <p>Price: ${state.price}</p>
          <p>Category: {state.category.name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-blue-600 px-4 rounded py-1 hover:bg-blue-500 active:scale-95">
          <TiShoppingCart size={30} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Details;
