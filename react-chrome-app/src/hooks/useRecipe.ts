import { RecipeInterface } from "../interfaces/interfaces";
import api from "../utils/api";

export default function useRecipe() {
  const getRecipes = async () => {
    try {
      const res = await api.get(`/recipes`);
      return res.data.message;
    } catch (error: any) {
      return [];
    }
  };

  const addRecipe = async (recipe: RecipeInterface) => {
    try {
      const res = await api.post(`/recipes`, recipe);
      alert(res.data.message);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    getRecipes,
    addRecipe,
  };
}
