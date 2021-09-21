import styled from "styled-components";

const Hero = styled.section`
  height: calc(100vh - 100px);
  width: 100%;
  background: ${({ direction, theme }) =>
    direction == "left" ? theme.beige : theme.primary};

  .inner {
    width: 88%;
    ${({ direction }) =>
      direction == "left" ? "margin-right:auto" : "margin-left:auto"};
    display: grid;
    min-height: calc(100vh - 100px);
    grid-template-columns: ${({ direction }) =>
      direction == "left" ? "30% 1fr" : "1fr auto"};

    @media (max-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 3fr 2fr;
    }

    .hero--text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      color: ${({ direction, theme }) =>
        direction == "left" ? theme.text : "#fff"};
      font-family: ${({ theme }) => theme.heading};

      h1 {
        margin-bottom: 5rem;
        color: ${({ direction, theme }) =>
          direction == "left" ? theme.gold : "#fff"};
        max-width: 70%;
        font-family: ${({ theme }) => theme.heading};
      }
    }

    .hero--img {
      order: ${({ direction }) => (direction == "left" ? -1 : 0)};
      height: calc(100vh - 100px);
      display: flex;
      justify-content: flex-end;
      overflow: hidden;
      position: relative;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
`;

export { Hero };
