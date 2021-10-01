import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 8rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-gap: 3rem;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;

  @media (min-width: ${({ theme }) => theme.widescreen}) {
    &:nth-child(2),
    &:nth-child(5) {
      margin-top: 0rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 2rem;
  }

  .item-text {
    text-align: center;
    h3 {
      font-size: 4rem;
      color: ${({ theme }) => theme.gold};
      margin-top: 2rem;
    }

    P {
      text-transform: ${({ type }) => console.log(type)};
    }
  }
`;

export { Grid, GridItem };
