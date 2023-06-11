import React, { useMemo } from "react";
import SearchInput from "./SearchInput";
import DataList from "./DataList";
import { RecipeInterface } from "../../interfaces/interfaces";

interface Props {
  value: string | undefined;
  changeValue: Function;
  recipes: Array<RecipeInterface>;
  setSelectedRecipes: Function;
}

function Index({ value, changeValue, recipes, setSelectedRecipes }: Props) {
  const searchedRecipes = useMemo(
    () =>
      value &&
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(value.toLowerCase())
      ),
    [value, recipes]
  );

  return (
    <div className="relative">
      <SearchInput value={value} changeValue={changeValue} />
      {searchedRecipes && searchedRecipes.length > 0 && (
        <DataList
          recipes={searchedRecipes}
          setSelectedRecipes={setSelectedRecipes}
        />
      )}
    </div>
  );
}

export default Index;
