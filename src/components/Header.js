import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        Filmy<span className="text-white">Verse</span>
      </span>
      <Link to={"/addmovie"}>
        {" "}
        <h1 classname="text-lg text-white cursor-pointer flex item-center">
          <Button>
            {" "}
            <AddIcon classname="mr-1" color="inherit" />
            <span className="text-white"> Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
