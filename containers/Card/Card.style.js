import styled from "styled-components";

const Card = styled.div`
  padding: 4rem;
  border: ${({ theme, type }) =>
    type === "services" ? "none" : `1px solid ${({ theme }) => theme.gold}`};
  text-align: ${({ type }) => (type === "services" ? "center" : "left")};
  color: ${({ type, theme }) => (type === "services" ? "#fff" : theme.text)};

  img {
    margin-bottom: 2rem;
    width: 100%;
  }

  h3 {
    color: ${({ theme }) => theme.gold};
  }
  span {
    display: inline-block;
    margin-top: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.gold};
  }
`;

export { Card };
