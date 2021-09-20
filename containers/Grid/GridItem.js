import React from "react";
import Image from "next/image";

import { GridItem as StyledItem } from "./Grid.style";

export default function GridItem({ img, heading, desc }) {
  return (
    <StyledItem>
      <div className="item-image">
        <Image src={img} alt={desc} width="390" height="610" />
      </div>
      <div className="item-text">
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </StyledItem>
  );
}
