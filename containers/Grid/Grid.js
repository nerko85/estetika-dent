import React from "react";
import { Grid as StyledGrid } from "./Grid.style";

import GridItem from "./GridItem";

export default function Grid({ items, type }) {
  return (
    <StyledGrid type={type}>
      {items.map((item, index) => {
        const { img, heading, desc } = item;
        return <GridItem key={index} img={img} heading={heading} desc={desc} />;
      })}
    </StyledGrid>
  );
}
