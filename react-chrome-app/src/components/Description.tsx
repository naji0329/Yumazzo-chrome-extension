import React from "react";
import { DishInterface } from "../interfaces/interfaces";

interface Props {
  dish: DishInterface;
}

export default function Description({ dish }: Props) {
  return (
    <div className="bg-[#131823] p-2 rounded-md">
      <div className="bg-[#17CFC4] py-4 px-5 rounded-md">
        <div className="flex justify-start items-center gap-3">
          <img src="/images/difficult.png" alt="Difficult" />
          <p className="text-[#1E202C] font-bold text-lg">
            Difficulty: {dish.difficulty}
          </p>
        </div>
        <p className="text-[#0D1119] leading-5 text-base mt-4">
          {dish.description}
        </p>

        <a href={dish.link} target="_blank" rel="noreferrer" className="mt-4">
          <button className="mt-2 w-full bg-[#1D2A43] text-white text-sm text-center py-2 rounded-md">
            View Full Recipe
          </button>
        </a>
      </div>
    </div>
  );
}
