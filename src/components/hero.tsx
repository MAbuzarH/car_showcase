"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handelScrol = () => {};
  return (
    <div className="hero ">
      <div className="padding-x pt-36 flex-1">
        <h1 className="hero__title">
          Find, Book or Reant A Car! --quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car reantel experance with oureffot less Booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full "
          handleClick={handelScrol}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
