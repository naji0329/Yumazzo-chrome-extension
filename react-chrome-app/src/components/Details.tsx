import React from "react";
import { DishInterface } from "../interfaces/interfaces";

interface Props {
  dish: DishInterface;
}

export default function Details({ dish }: Props) {
  return (
    <div className="bg-[#131823] px-6 py-4 mt-5 rounded-md grid grid-cols-2">
      <div>
        <p className="text-label text-sm">Seafood</p>
        <p className="text-white text-base mt-1">Jumbo Shrimp</p>
      </div>
      <div>
        <p className="text-label text-sm">Produce</p>
        <p className="font-semibold text-base text-white mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FEDBC] to-[#33EA9C]">
            Onion
          </span>
          &nbsp;/&nbsp;
          <span className="text-[#FB2047]">Tomatoes</span>
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Spices</p>
        <p className="font-semibold text-base font text-white mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FEDBC] to-[#33EA9C]">
            Bay Leaf
          </span>
          &nbsp;/&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64]">
            Saffron
          </span>
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Olive Oil</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          Spanish Olive Oil
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Volume/Weight</p>
        <p className="text-white text-base mt-1">700g</p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Serves</p>
        <p className="text-white text-base mt-1">4</p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Authenticity</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          Unverified
        </p>
      </div>
      <div className="mt-3">
        <p className="text-label text-sm">Stock</p>
        <p className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#ED7F4F] to-[#FF5A64] mt-1">
          Chicken
        </p>
      </div>
    </div>
  );
}
