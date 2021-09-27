import React from "react";
import { Accomodation as StyledAccomodation } from "./Accomodation.style";

export default function Accomodation({ accomodations, children }) {
  return (
    <StyledAccomodation>
      <div className="container">
        {children}
        <div className="grid">
          {accomodations &&
            accomodations.map((item) => {
              const { id, img, title, desc } = item;
              return (
                <div key={id} className="grid--item">
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              );
            })}
        </div>
      </div>
    </StyledAccomodation>
  );
}
