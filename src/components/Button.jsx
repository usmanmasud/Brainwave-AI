import React from "react";
import ButtonSvg from "../assets/assets/svg/ButtonSvg";

export const Button = ({ className, href, onClick, children, px, white }) => {
  const renderButton = () => (
    <button>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};
