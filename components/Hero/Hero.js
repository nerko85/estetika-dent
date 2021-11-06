import React from "react";
import { Hero as StyledHero } from "./Hero.style";

export default function Hero({ children, title, desc, img }) {
  return (
    <StyledHero>
      <div className="inner">
        <div className="hero--text">
          <h1>{title}</h1>
          {desc && <p className="hero--desc">{desc}</p>}
          {children}
        </div>
        <div className="hero--img">
          <img src={img} alt="Mature lady showing her theets" />
          <div className="quote">
            <blockquote>
              "Od danas se više ne bojim ići kod zubara jer zubari vole malu djecu""
            </blockquote>
            <span>Dejan Petrović</span>
          </div>
        </div>
      </div>
    </StyledHero>
  );
}
