import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.beige};
  border-top: 1px solid ${({ theme }) => theme.gold};
  border-bottom: 1px solid ${({ theme }) => theme.gold};

  .inner {
    max-width: 90vw;
    ${({ dir }) =>
      dir === "left" ? "margin-left: auto" : "margin-right: auto"};
    display: grid;
    grid-template-columns: ${({ dir }) =>
      dir === "left" ? "1fr auto" : "auto 1fr"};
    @media (max-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 3fr 2fr;
    }

    .section--text {
      display: flex;
      padding: 0 15rem;
      color: ${({ theme }) => theme.text};
      font-family: ${({ theme }) => theme.heading};

      .section-content {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1 {
          margin-bottom: 5rem;
          color: ${({ theme }) => theme.gold};
          font-family: ${({ theme }) => theme.heading};
        }
        p {
          margin-bottom: 5rem;
        }
      }
    }

    .section--media {
      order: ${({ dir }) => (dir === "left" ? 1 : -1)};
      border-right: 1px solid ${({ theme }) => theme.gold};
      border-left: 1px solid ${({ theme }) => theme.gold};
      height: calc(100vh - 100px);
      display: flex;
      justify-content: flex-start;
      overflow: hidden;
      isolation: isolate;
      position: relative;

      ${
        "" /* &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #141c5eed, #fff0 50%);
        opacity: 1;
        isolation: isolate;
        filter: ;
      } */
      }
      
      img {
        height: 100%;
        width: auto;
        position:relative;
      }
      .quote {
        position: absolute;
        z-index: 99;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        max-width: 70%;
        text-align: center;
        font-family: ${({ theme }) => theme.font};
        span {
          display: inline-block;
          margin-top: 3rem;
          color: #fff;
          font-family: ${({ theme }) => theme.heading};
          font-size: 1.8rem;
        }
    }
  }
`;

export { Section };
