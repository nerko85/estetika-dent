import React from "react";
import Image from "next/image";
import { Hero as StyledHero } from "./Hero.style";

export default function Hero({ children, title, desc, direction, img }) {
  return (
    <StyledHero direction={direction}>
      <div className="inner">
        <div className="hero--text">
          <h1>{title}</h1>
          {desc && <p className="hero--desc">{desc}</p>}
          {children}
        </div>
        <div className="hero--img">
          {img ? (
            <img src={img} alt="Mature lady showing her theets" />
          ) : (
            <div>test</div>
          )}
        </div>
      </div>
    </StyledHero>
  );
}

Hero.defaultProps = {
  direction: "right",
};
