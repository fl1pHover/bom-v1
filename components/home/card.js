import Image from "next/image";
import React from "react";
import { BiArea, BiDoorOpen, BiGitCompare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";

import { Tooltip, useToast, IconButton } from "@chakra-ui/react";

const ItemContainer = ({ Icon = () => <></>, text = "" }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Icon className="text-white" />
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

const typeCheck = (id, value, propmt) => {
  return id && id.name && id.name.toLowerCase() === propmt;
};

const calcValue = (props, checker = "байхгүй", suffix) => {
  // p?.value?.toLowerCase() === "байхгүй"
  if (props && props.value && props.value.toLowerCase() === checker) return 0;
  if (props && props.value && props.value) {
    if (suffix) return `${props.value} ${suffix}`;
    return props.value;
  }
  return "-";
};

const Card = ({ item }) => {
  const toast = useToast();
  return (
    <div className="relative bg-red-300 rounded-md overflow-hidden group shadow-md">
      <button className="md:min-h-[40vh] min-h-[30vh] h-full w-full relative">
        <Image
          src={item?.image ?? "/images/HeaderSlider/1.jpg"}
          alt="product image"
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-125 transition-all ease-in-out duration-400 aspect-[4/5]"
        />
      </button>
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
        <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate-700/0 via-slate-700/20 to-slate-900/100 px-3 py-2">
          <div className="h-[60%]">
            <div className="flex flex-row justify-between">
              <div className="bg-mainBlossom w-fit rounded-md px-2 py-1">
                <p className="text-sm text-white font-semibold">Logo</p>
              </div>
              <button className="bg-gray-600 rounded-full w-8 h-8 flex justify-center items-center">
                <FiCamera size={16} className="text-white" />
                {/* <p>{item.gallery}</p> */}
              </button>
            </div>
          </div>
          <div className="min-h-[40%] text-left flex flex-col mb-2 justify-end space-y-4">
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-white text-lg font-bold uppercase">
                  {item.title}
                </p>
                <p className="text-slate-200/90 font-semibold first-letter:uppercase">
                  {item.description}
                </p>
              </div>
              <div className="space-x-2 flex flex-row items-center">
                <Tooltip label="Хадгалах" className="">
                  <button
                    className="bg-slate-200/40 rounded-full p-2 group hover:bg-slate-200 transition-all duration-300 ease-in-out"
                    onClick={() =>
                      toast({
                        title: "Хүсэл рүү нэмэгдлээ.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    <FaHeart className="hover:text-red-400 text-red-400/90" />
                  </button>
                </Tooltip>

                <Tooltip label="Харьцуулах">
                  <button className="bg-slate-200/40 rounded-full p-2 hover:bg-slate-200 transition-all duration-300 ease-in-out">
                    <BiGitCompare className="text-blue-700" />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="min-h-[25px] flex flex-wrap justify-between gap-x-1  items-end">
              {/* <div className="grid md:grid-cols-4 grid-cols-2 flex-1"> */}
              {item.filters &&
                item.filters.map((p, i) => {
                  return (
                    <React.Fragment key={i}>
                      {typeCheck(p.id, p.value, "өрөө") && (
                        <ItemContainer
                          Icon={(props) => <BiDoorOpen {...props} text="" />}
                          text={calcValue(p, "байхгүй")}
                        />
                      )}
                      {typeCheck(p.id, p.value, "мастер унтлагын өрөө") && (
                        <ItemContainer
                          Icon={(props) => <IoBedOutline {...props} text="" />}
                          text={calcValue(p, "байхгүй")}
                        />
                      )}
                      {typeCheck(p.id, p.value, "угаалгын өрөөний тоо") && (
                        <ItemContainer
                          Icon={(props) => <TbBath {...props} text="" />}
                          text={calcValue(p, "байхгүй")}
                        />
                      )}
                      {typeCheck(p.id, p.value, "талбай") && (
                        <ItemContainer
                          Icon={(props) => <BiArea {...props} text="" />}
                          text={calcValue(p, "байхгүй", "м.кв")}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
