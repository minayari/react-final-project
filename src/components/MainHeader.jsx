import { Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { use, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div
      className={`mb-[2rem] flex justify-between items-center sticky top-0 bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow" : ""
      }`}
    >
      <div>
        <IconButton>
          <ShoppingCartIcon fontSize="large" color="primary"></ShoppingCartIcon>
        </IconButton>
      </div>

      <div>bread crumb</div>
    </div>
  );
}
