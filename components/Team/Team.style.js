import styled from "styled-components";

const Team = styled.div`
  padding: 10rem 0;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  h1 {
    text-align: center;
    margin-bottom: 10rem;
  }
`;

export { Team };
