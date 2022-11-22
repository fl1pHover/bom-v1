import mergeNames from "@/util/mergeNames";
import React from "react";

const Title = (props) => {
  return (
    <p
      className={mergeNames(
        "font-semibold pb-2 text-gray-900",
        props?.classname
      )}
    >
      {props.children}
    </p>
  );
};

export default Title;
export const SectionTitle = (props) => {
  return (
    <p
      className={mergeNames(
        "uppercase text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-700 font-extrabold",
        props?.classname ?? ""
      )}
    >
      {props.children}
    </p>
  );
};
