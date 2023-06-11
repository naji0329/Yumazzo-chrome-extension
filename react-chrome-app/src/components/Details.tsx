import React from "react";
import { RecipeInterface } from "../interfaces/interfaces";

interface Props {
  recipe: RecipeInterface;
}

export default function Details({ recipe }: Props) {
  return (
    <div className="bg-[#131823] px-6 py-4 mt-5 rounded-md grid grid-cols-2">
      <div>
        <p className="text-label text-sm">Protein</p>
        <p className="text-white text-base mt-1">{recipe.protein}</p>
      </div>
      <div>
        <p className="text-label text-sm">Spice Level</p>
        <p className="font-semibold text-base text-[#FB2047] mt-1">
          {recipe.spice}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Spices</p>
        <p className="font-semibold text-base font text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          {recipe.spice}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Cooking Oil</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FEAB49] to-[#131823] mt-1">
          {recipe.cookingOil}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Volume/Weight</p>
        <p className="text-white text-base mt-1">{recipe.volume}g</p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Serves</p>
        <p className="text-white text-base mt-1">{recipe.serves}</p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Authenticity</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          {recipe.authenticity}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Stock</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          {recipe.stock}
        </p>
      </div>
    </div>
  );
}
