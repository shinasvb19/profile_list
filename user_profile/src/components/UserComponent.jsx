import React from "react";

const UserComponent = ({ name, profilepicture }) => {
  console.log(profilepicture);
  return (
    <div className="pb-3 pl-4">
      <div className="flex items-center ">
        <div
          style={{ backgroundImage: `url(${profilepicture})` }}
          className="bg-no-repeat bg-contain w-10 h-10 rounded-full "
        ></div>

        <div className="m-5 font-medium"> {name}</div>
      </div>

      <div>
        <hr />
      </div>
    </div>
  );
};

export default UserComponent;
