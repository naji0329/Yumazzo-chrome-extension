import React from "react";
import { Link } from "react-router-dom";

import { RecipeInterface } from "../interfaces/interfaces";
import FlagIcon from "./common/FlagIcon";
import SocialLink from "./common/SocialLink";

interface Props {
  recipe: RecipeInterface;
}

export default function RecipeHeader({ recipe }: Props) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex justify-start items-center gap-2">
        <FlagIcon origin={recipe.origin} />
        <p className="text-white font-medium">{recipe.name}</p>
      </div>
      <div className="flex justify-end items-center gap-1">
        <SocialLink
          link={"https://test.com"}
          icon="/images/link1.png"
          alt="Twitter"
        />
        <SocialLink
          link={"https://test.com"}
          icon="/images/link2.png"
          alt="Telegram"
        />
        <SocialLink
          link={"https://test.com"}
          icon="/images/link3.png"
          alt="Medium"
        />
        <Link to="/recipe/add">
          <p className="bg-[#171F2F] text-white text-sm h-6 flex items-center px-3 rounded-sm">
            + Add Recipe
          </p>
        </Link>
      </div>
    </div>
  );
}
