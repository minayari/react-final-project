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

      <div
        className={`flex justify-center items-center transition-all duration-300 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <input
          type="text"
          className="w-[20rem] border-[2px] border-solid border-cyan-800 rounded-tl-[0.5rem] rounded-bl-[0.5rem] focus: outline-none p-[0.15rem]"
        />
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "0.2rem",
            borderRadius: "0 0.5rem 0.5rem 0",
            ":hover": {
              backgroundColor: "white",
              color: "primary.main",
              cursor: "pointer",
            },
          }}
        >
          <SearchIcon back></SearchIcon>
        </Box>
      </div>

      <div>bread crumb</div>
    </div>
  );
}
