import React from "react";
import Image from "next/image";
import { Hero as StyledHero } from "./Hero.style";

export default function Hero({ children, title, desc }) {
  return (
    <StyledHero>
      <div className="inner">
        <div className="hero--text">
          <h1>{title}</h1>
          {desc && <p>{desc}</p>}
          {children}
        </div>
        <div className="hero--img">
          <img
            src="/images/mature-lady-showing-theets.png"
            alt="Mature lady showing her theets"
          />
        </div>
      </div>
    </StyledHero>
  );
}
