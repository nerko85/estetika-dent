import styled from "styled-components";

const Card = styled.div`
  padding: 4rem;
  border: 1px solid ${({ theme }) => theme.gold};

  img {
    margin-bottom: 2rem;
    width: 100%;
  }

  span {
    display: inline-block;
    margin-top: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.gold};
  }
`;

export { Card };
