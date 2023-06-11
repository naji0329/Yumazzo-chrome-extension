import React from "react";

interface Props {
  origin: string | undefined;
}

export default function FlagIcon({ origin }: Props) {
  return (
    <img
      src={
        origin
          ? `https://flagsapi.com/${origin.toUpperCase()}/flat/64.png`
          : "/images/unknown_flag.png"
      }
      alt={origin ? origin.toUpperCase() : "Unknow"}
      className="w-6 h-6"
    />
  );
}
