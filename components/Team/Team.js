import React from "react";
import { Team as StyledTeam } from "./Team.style";

import Grid from "../../containers/Grid/Grid";

export default function Team({ members, title }) {
  return (
    <StyledTeam>
      <div className="container">
        <h1>{title}</h1>
        <Grid items={members} type="team" />
      </div>
    </StyledTeam>
  );
}
