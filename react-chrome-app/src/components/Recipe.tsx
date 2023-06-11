import React from "react";
import { RecipeInterface } from "../interfaces/interfaces";
import DishHeader from "./DishHeader";
import Description from "./Description";
import Details from "./Details";

interface Props {
  recipe: RecipeInterface;
}

export default function Recipe({ recipe }: Props) {
  return (
    <>
      <DishHeader recipe={recipe} />
      <Description recipe={recipe} />
      <Details recipe={recipe} />
    </>
  );
}
