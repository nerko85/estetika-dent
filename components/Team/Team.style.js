import styled from "styled-components";

const Team = styled.div`
  padding: 10rem 0;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-top: 1px solid ${({ theme }) => theme.gold};
  border-bottom: 1px solid ${({ theme }) => theme.gold};
  h1 {
    text-align: center;
    margin-bottom: 10rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 4rem;

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

export { Team };
