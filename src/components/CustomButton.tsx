"use client";
import Image from "next/image";
import { CustomButtonProps } from "../types";

function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle} `}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
