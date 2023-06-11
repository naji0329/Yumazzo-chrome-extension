import { Suspense, useEffect, useState } from "react";
import Search from "./../components/serach/Index";
import Recipe from "./../components/Recipe";
import Loading from "./../components/Loading";
import NotFound from "./../components/NotFound";
import useRecipe from "../hooks/useRecipe";
import { RecipeInterface } from "./../interfaces/interfaces";
import { useEffectOnce } from "../hooks/useEffectOnce";

function Home() {
  const { getRecipes } = useRecipe();
  const [recipes, setRecipes] = useState<Array<RecipeInterface>>([]);
  const [selectedRecipes, setSelectedRecipes] = useState<RecipeInterface>();
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await getRecipes();
    setRecipes(res);
  };

  useEffectOnce(() => {
    fetchData();
  });

  useEffect(() => {
    setSearch("");
  }, [selectedRecipes]);

  return (
    <>
      <Search
        value={search}
        changeValue={setSearch}
        recipes={recipes}
        setSelectedRecipes={setSelectedRecipes}
      />
      <Suspense fallback={<Loading />}>
        {selectedRecipes ? <Recipe recipe={selectedRecipes} /> : <NotFound />}
      </Suspense>
    </>
  );
}

export default Home;
