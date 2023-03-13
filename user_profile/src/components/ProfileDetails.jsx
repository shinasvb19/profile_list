import React, { useEffect, useState } from "react";
import instance from "../app/api/instance";
import UserComponent from "./userComponent";
const ProfileDetails = () => {
  const [users, SetUSers] = useState([]);
  useEffect(() => {
    instance.get("users.json").then((response) => {
      SetUSers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="h-full w-full absolute grid place-items-center">
      <div className="w-[80vh] h-[80vh] bg-[#F6F6F6] mt-10 rounded-2xl shadow-xl pt-[15vh]">
        <div className="grid place-items-center mb-5">
          <span className="font-display font-bold text-xl">
            Select an account
          </span>
        </div>

        <div className="w-[80vh] h-[65vh] bg-white rounded-b-2xl overflow-scroll">
          {users.users?.map((user) => (
            <UserComponent
              key={user.id}
              name={user.name}
              profilepicture={user.profilepicture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
