import React from "react";
import { RecipeInterface } from "../../interfaces/interfaces";
import DatalistItem from "./DatalistItem";

interface Props {
  recipes: Array<RecipeInterface>;
  setSelectedRecipes: Function;
}

export default function DataList({ recipes, setSelectedRecipes }: Props) {
  return (
    <div className="absolute bg-[#121826] top-12 w-full rounded-md left-0 p-2 max-h-[300px] overflow-auto">
      {recipes.map((recipe: RecipeInterface, key: number) => (
        <div key={key} onClick={() => setSelectedRecipes(recipe)}>
          <DatalistItem recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
