import styled from "styled-components";

const Card = styled.div`
  padding: 4rem;
  border: ${({ theme, type }) =>
    type === "services" ? "none" : `1px solid ${theme.gold}`};
  text-align: ${({ type }) => (type === "services" ? "center" : "left")};
  color: ${({ type, theme }) => (type === "services" ? "#fff" : theme.text)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-bottom: 2rem;
    ${"" /* width: 100%; */}
  }

  h3 {
    color: ${({ theme }) => theme.gold};
    font-size: 3rem;
    margin: 1rem 0;
  }
  span {
    display: inline-block;
    margin-top: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.gold};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    border: none;
    padding: 3rem;
    img {
      width: 100%;
      max-width: 250px;
    }
  }
`;

export { Card };
