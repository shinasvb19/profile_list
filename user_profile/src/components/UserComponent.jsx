import React from "react";
import { Link } from "react-router-dom";

const UserComponent = ({ name, profilepicture, id }) => {
  return (
    <Link to={"profile/" + id}>
      <div className="pb-3 pl-4 cursor-pointer">
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
    </Link>
  );
};

export default UserComponent;
