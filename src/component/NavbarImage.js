import React from "react";

const NavbarImage = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.avatar} alt="" />
      </div>
    </div>
  );
};

export default NavbarImage;
