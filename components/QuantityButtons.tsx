import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityButtonsProps {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="flex flex-row items-center gap-2 bg-[#FF8000] p-1 px-3 rounded">
      <IconButton
        onClick={decreaseQuantity}
        className="cursor-pointer text-white text-sm md:text-3xl font-bold m-2"
      >
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={increaseQuantity}
        className="cursor-pointer text-white md:text-3xl text-sm m-2"
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default QuantityButtons;
