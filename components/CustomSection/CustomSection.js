import React from "react";
import { Section } from "./CustomSection.style";

export default function CustomSection({ title, desc, img, children, dir }) {
  return (
    <Section>
      <div className="inner">
        <div className="section--text">
          <h1>{title}</h1>
          {desc && <p className="section--desc">{desc}</p>}
          {children}
        </div>
        <div className="section--media">
          <img src={img} alt="Mature lady showing her theets" />
        </div>
      </div>
    </Section>
  );
}
