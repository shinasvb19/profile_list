import React from "react";

const PofilePage = () => {
  return (
    <div className="grid grid-cols-4 pt-12 pl-20 pr-10 ">
      <div className="bg-[#3D57C8] w-[38vh] h-[90vh] rounded-3xl"></div>
      <div className=" col-span-3 grid grid-cols-3 max-h-20">
        <div className="font-medium text-xl  bg-black">profile</div>
        <div className="col-span-2 text-xl font-medium  bg-blue-700">
          Leanne Graham
        </div>
        <hr className="col-span-3 border-2 mt-4" />
        <div className="font-medium text-xl  bg-black h-[80vh] mt-5">
          profile
        </div>
        <div className="col-span-2 text-xl font-medium mt-5 h-[80vh]  bg-blue-700">
          Leanne Graham
        </div>
      </div>
    </div>
  );
};

export default PofilePage;
