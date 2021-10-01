import styled from "styled-components";

const ContactStrip = styled.section`
  padding: 2rem;
  color: ${({ theme }) => theme.gold};
  text-align: center;

  h1 {
    cursor: pointer;
    span {
      margin-left: 2rem;
      font-size: 3rem;
    }

    &:hover {
      svg {
        animation: ${({ theme }) => theme.arrow} 1s ease infinite;
      }
    }
  }
`;
export { ContactStrip };
