"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { relative } from "path";
// import {fetchCarImage} from "./CarImg";
import { genrateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModel, car }: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset bg-black opacity-25" />
          </Transition.Child>
          <div className="fixed overflow-y-auto inset-0">
            <div className="flex min-h-full items-start justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl p-6 transition-all flex flex-col gap-5  ">
                  <button
                    className="absolute top-2 right-2 z-10  w-fit bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModel}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 ">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={genrateCarImageUrl(car)}
                        alt="car img"
                        fill
                        priority
                        className="object-contain"
                      />
                      {/* <CarImage car="Toyota Camry" angle="front" /> */}
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 relative bg-blue-100 rounded-lg w-full h-24">
                        <Image
                          src={genrateCarImageUrl(car, "29")}
                          alt="car img"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative bg-blue-100 rounded-lg w-full h-24">
                        <Image
                          src={genrateCarImageUrl(car, "33")}
                          alt="car img"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative bg-blue-100 rounded-lg w-full h-24">
                        <Image
                          src={genrateCarImageUrl(car, "13")}
                          alt="car img"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-samibold font-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between items-start gap-3 w-full text-right"
                          key={key}
                        >
                          <h2 className="text-gray capitalize">
                            {key.split("_").join(" ")}
                          </h2>
                          <p className="text-samibold text-black-100">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
