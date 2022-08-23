import { useState } from "react";
import NavbarImage from "./NavbarImage";
import NavbarName from "./NavbarName";

const Navbar = () => {
  const [data, setData] = useState({
    name: "My Name",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "salmon",
      }}
    >
      <NavbarName data={data} />
      <NavbarImage data={data} />
    </div>
  );
};

export default Navbar;
