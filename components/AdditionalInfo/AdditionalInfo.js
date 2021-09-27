import React from "react";
import styled from "styled-components";

export default function AdditionalInfo() {
  return (
    <StyledInfo>
      <div className="container">
        <h1>Dodatni info</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </StyledInfo>
  );
}

const StyledInfo = styled.section`
  padding: 5rem 0 10rem;
  background: ${({ theme }) => theme.beige};
  text-align: center;
  h1 {
    margin: 5rem 0;
    color: ${({ theme }) => theme.gold};
  }
  p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;
