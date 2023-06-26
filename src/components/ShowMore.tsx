"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { UpdateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = UpdateSearchParams('limit',`${newLimit}`);
    router.push(newPathname);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyle="bg-primary-blue rounded text-white"
          handleClick={handelNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
