import styled from "styled-components";

const Button = styled.div`
  padding: 2rem 3rem;
  border: 1px solid ${({ theme }) => theme.gold};
  border-radius: 5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  a {
    text-transform: uppercase;
    font-size: 1.4rem;
  }

  &:hover {
    background: ${({ theme }) => theme.gold};
    color: ${({ theme }) => theme.primary};
  }
`;

export { Button };
