import React from "react";
import { DishInterface } from "../interfaces/interfaces";
import DishHeader from "./DishHeader";
import Description from "./Description";
import Details from "./Details";

interface Props {
  dish: DishInterface;
}

export default function Dish({ dish }: Props) {
  return (
    <>
      <DishHeader dish={dish} />
      <Description dish={dish} />
      <Details dish={dish} />
    </>
  );
}
