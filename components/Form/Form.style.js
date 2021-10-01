import styled from "styled-components";

const Form = styled.section`
  padding: 10rem 0;
  background: ${({ theme }) => theme.beige};

  .inner {
    width: min(80vw, 550px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      color: ${({ theme }) => theme.gold};
      margin-bottom: 3rem;
    }

    button {
      align-self: center;
      background: none;
      padding: 2rem 4rem;
      border: 1px solid ${({ theme }) => theme.gold};
      border-radius: 5rem;
      cursor: pointer;
      transition: all 0.5s ease;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.font};

      &:hover {
        background: ${({ theme }) => theme.gold};
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 4rem 0;
  }
`;

export { Form };
