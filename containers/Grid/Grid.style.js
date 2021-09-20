import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 8rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    margin-top: 10rem;
  }

  &:nth-child(2) {
    justify-content: flex-start;
  }
  .item-image {
  }

  .item-text {
    text-align: center;
    h3 {
      font-size: 4rem;
      color: ${({ theme }) => theme.gold};
      margin: 2rem 0;
    }

    P {
      text-transform: ${({ type }) => console.log(type)};
    }
  }
`;

export { Grid, GridItem };
