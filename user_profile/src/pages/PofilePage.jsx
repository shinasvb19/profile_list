import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../app/api/instance";
import Menu from "../components/Menu";

const PofilePage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [user, setUser] = useState();
  useEffect(() => {
    instance.get("users.json").then((response) => {
      setUser(response.data.users?.find((element) => element.id == id));
    });
  }, [id, user]);
  // console.log(page);
  return (
    <div className="grid grid-cols-4 pt-12 pl-20 pr-10 ">
      <Menu setPage={setPage} />
      <div className=" col-span-3 grid grid-cols-3 max-h-20">
        <div className="font-medium text-xl">profile</div>
        <div className="col-span-2 text-xl font-medium  flex justify-between">
          <div></div>
          <span className="flex justify-center items-center">
            <div
              style={{ backgroundImage: `url(${user?.profilepicture})` }}
              className="bg-no-repeat bg-contain w-10 h-10 rounded-full mx-2"
            ></div>

            <span>{user?.name}</span>
          </span>
        </div>
        <hr className="col-span-3 border-2 mt-4" />
        <div
          className={
            page == 1
              ? "font-medium text-xl  h-[80vh] mt-5 flex flex-col items-center"
              : "hidden"
          }
        >
          <div
            style={{ backgroundImage: `url(${user?.profilepicture})` }}
            className="bg-no-repeat bg-contain w-52 h-52 rounded-full mx-2 mt-6 "
          ></div>
          <div className="font-medium mt-6">{user?.name}</div>
          <div className="">
            <span className="text-[#cccbcb] mt-6 ">UserName: </span>
            <span className="font-medium mt-6">{user?.username}</span>
          </div>
          <div>
            <span className="text-[#cccbcb] mt-6">Email: </span>
            <span className="font-medium mt-6">{user?.email}</span>
          </div>
          <div>
            <span className="text-[#cccbcb] ">Phone: </span>
            <span className="font-medium">{user?.phone}</span>
          </div>
          <div>
            <span className="text-[#cccbcb] ">Website: </span>
            <span className="font-medium">{user?.website}</span>
          </div>

          <hr className=" w-full  border-2 mt-4" />
          <div className="font-bold">Company</div>
          <div>
            <span className="text-[#cccbcb] ">Name: </span>
            <span className="font-medium">{user?.company.name}</span>
          </div>
          <div>
            <span className="text-[#cccbcb] ">Catch phrase: </span>
            <span className="font-medium break-all text-center">
              {user?.company.catchPhrase}
            </span>
          </div>
          <div>
            <span className="text-[#cccbcb] ">bs: </span>
            <span className="font-medium break-all text-center">
              {user?.company.bs}
            </span>
          </div>
        </div>

        <div
          className={
            page == 1
              ? "col-span-2 text-xl font-medium mt-5 h-[80vh] flex"
              : "hidden"
          }
        >
          <hr class=" my-8  h-96 w-1 border-0 ml-20 bg-slate-300"></hr>
          <div className="flex flex-col ml-10">
            <div className=" text-[#cccbcb]">Address:</div>
            <div className="mt-3">
              <span className="text-[#cccbcb] ">street: </span>
              <span className="font-medium break-all text-center">
                {user?.address.street}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-[#cccbcb] ">Suite: </span>
              <span className="font-medium break-all text-center">
                {user?.address.suite}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-[#cccbcb] ">City: </span>
              <span className="font-medium break-all text-center">
                {user?.address.city}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-[#cccbcb] ">Zipcode: </span>
              <span className="font-medium break-all text-center">
                {user?.address.zipcode}
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            page == 1
              ? "hidden"
              : "text-4xl font-extrabold mx-60 mt-60 col-span-4 text-gray-200"
          }
        >
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default PofilePage;
