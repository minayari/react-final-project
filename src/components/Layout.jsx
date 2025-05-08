import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MainHeader isScrolled={isScrolled} />
      {children}
    </>
  );
}
