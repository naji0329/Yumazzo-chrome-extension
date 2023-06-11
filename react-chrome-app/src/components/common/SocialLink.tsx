import React from "react";

interface Props {
  icon: string;
  alt: string;
  link: string;
}

export default function SocialLink({ link, icon, alt }: Props) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt={alt} />
    </a>
  );
}
