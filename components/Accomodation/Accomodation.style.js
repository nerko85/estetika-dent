import styled from "styled-components";

const Accomodation = styled.section`
  padding: 14rem 0;
  background: ${({ theme }) => theme.beige};

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.gold};
    margin-bottom: 8rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 8rem;

    .grid--item {
      text-align: center;
      img {
        width: 100%;
        margin-bottom: ${({ size }) => (size === "small" ? "3rem" : "6rem")};
        ${({ size }) =>
          size === "small" ? "max-width:210px" : "max-width:400px"};
      }
      h3 {
        margin: 2rem 0;
        color: ${({ theme }) => theme.gold};
      }
    }
  }
`;

export { Accomodation };
