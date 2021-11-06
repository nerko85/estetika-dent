import React from "react";
import { Hero as StyledHero } from "./Hero.style";

export default function Hero({ children, person, title, desc, img, quote }) {
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
              {quote}
            </blockquote>
            <span>{person}</span>
          </div>
        </div>
      </div>
    </StyledHero>
  );
}
