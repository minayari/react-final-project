import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { use, useEffect, useState } from "react";

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
    <>
      <div
        className={`mb-[2rem] flex justify-between sticky top-0 bg-white z-50 transition-shadow duration-300 ${
          scrolled ? "shadow" : ""
        }`}
      >
        <IconButton>
          <HomeIcon fontSize="large" color="primary"></HomeIcon>
        </IconButton>

        <IconButton>
          <ShoppingCartIcon fontSize="large" color="primary"></ShoppingCartIcon>
        </IconButton>
      </div>
    </>
  );
}
