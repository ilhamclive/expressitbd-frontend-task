import React from "react";

function CreateProductHeader() {
  return (
    <div className="flex-1">
      <div className="p-1 flex flex-col space-y-2 md:space-y-5">
        <h1 className="text-lg md:text-2xl font-semibold mt-2">Create a store</h1>
        <p className="text-xs md:text-lg mt-2">Add your basic store Information and complete the setup</p>
      </div>
      <hr  className="w-full bg-black mx-1 my-2"/>
    </div>
  );
}

export default CreateProductHeader;
