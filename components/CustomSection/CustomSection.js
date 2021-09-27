import React from "react";
import { Section } from "./CustomSection.style";

export default function CustomSection({
  title,
  desc,
  img,
  dir,
  quote,
  children,
}) {
  return (
    <Section dir={dir}>
      <div className="inner">
        <div className="section--text">
          <div className="section-content">
            <h1>{title}</h1>
            {desc && <p className="section--desc">{desc}</p>}
            {children}
          </div>
        </div>
        <div className="section--media">
          <img src={img} alt="Mature lady showing her theets" />
          {quote && (
            <div className="quote">
              <blockquote>{quote}</blockquote>
              <span>Aleksandra Kovac</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

CustomSection.defaultProps = {
  dir: "right",
};
