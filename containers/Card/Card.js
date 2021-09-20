import React from "react";
import { Card as StyledCard } from "./Card.style";

export default function Card({ img, title, desc, name }) {
  return (
    <StyledCard>
      <img src={img} alt={title} />
      <div className="card--body">
        <h3>{title}</h3>
        <p>{desc}</p>
        {name && <span>{name}</span>}
      </div>
    </StyledCard>
  );
}
