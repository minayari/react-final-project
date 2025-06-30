import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[23rem] h-[5rem] flex justify-around items-center bg-white rounded-[1rem] custom-inner-shadow manu-resp">
      <div>
        <IconButton
          onClick={(evt) => {
            evt.stopPropagation();
            navigate("/login");
          }}
        >
          <LoginIcon fontSize="large"></LoginIcon>
        </IconButton>
      </div>

      <div>
        <IconButton
          onClick={(evt) => {
            evt.stopPropagation();
            navigate("/");
          }}
        >
          <HomeIcon fontSize="large"></HomeIcon>
        </IconButton>
      </div>
      <div>
        <IconButton
          onClick={(evt) => {
            evt.stopPropagation();
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
        </IconButton>
      </div>
    </div>
  );
}
