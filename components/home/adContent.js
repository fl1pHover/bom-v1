import React from "react";

import { Grid, Heading, Skeleton } from "@chakra-ui/react";

import MainContainer from "../../layout/mainContainer";

import ProductCard from "./productCard";
import { ContainerX, ContainerXP } from "@/lib/Container";
import { SectionTitle } from "@/lib/Title";
import Card from "./card";

// const Asd = <ProductCard />;
// const array = [...Array(10)];

const AdContent = ({ data, tlc, title = "Үл хөдлөх хөрөнгө" }) => {
  return (
    <ContainerXP classname="md:py-8 py-0">
      <div className="md:mb-8 mb-4 md:mt-6 mt-3">
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-5">
        {/* <ProductCard data={data} tlc={tlc} /> */}
        {data && data.map((item, key) => <Card key={key} item={item || {}} />)}
        {/* <ProductCard /> */}
        {/* <ProductCard /> */}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </ContainerXP>
  );
};

export default AdContent;
