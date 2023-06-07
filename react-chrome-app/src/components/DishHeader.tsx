import React from "react";
import { DishInterface } from "../interfaces/interfaces";

interface Props {
  dish: DishInterface;
}

export default function DishHeader({ dish }: Props) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex justify-start items-center gap-2">
        <img src="/images/spain_flag.png" alt="Spain Flag" className="" />
        <p className="text-white font-medium">{dish.name}</p>
      </div>
      <div className="flex justify-end items-center gap-1">
        {dish.socials.map((social, key) => (
          <a href={social.link} target="_blank" key={key} rel="noreferrer">
            <img src={social.icon} alt={social.description} />
          </a>
        ))}
      </div>
    </div>
  );
}
