import { Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { use, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

export default function MainHeader() {
  // const navigateToCart = useNavigate();

  // const location = useLocation();
  // const [scrolled, setScrolled] = useState(false);

  // const isHome = location.pathname === "/";

  // useEffect(() => {
  //   if (!isHome) return;

  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isHome]);

  // const headerClass = `flex justify-between items-center px-[1rem] fixed top-0 left-0 w-full z-50 transition-colors duration-300
  //   ${
  //     isHome
  //       ? scrolled
  //         ? "bg-cyan-800 shadow"
  //         : "bg-transparent"
  //       : "bg-cyan-800 shadow"
  //   }`;
  return (
    <div className=" bg-cyan-800 flex justify-between items-center px-[1rem] fixed top-0 left-0 w-full z-50">
      <div>
        <Breadcrumb />
      </div>
      <div>
        <IconButton
          onClick={(evt) => {
            evt.stopPropagation();
            navigateToCart("/cart");
          }}
        >
          <ShoppingCartIcon
            fontSize="large"
            sx={{ color: "white" }}
          ></ShoppingCartIcon>
        </IconButton>
      </div>
    </div>
  );
}
