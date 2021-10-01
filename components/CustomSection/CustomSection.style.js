import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 0;
  width: 100%;
  background: ${({ theme }) => theme.beige};
  border-top: 1px solid ${({ theme }) => theme.gold};
  border-bottom: 1px solid ${({ theme }) => theme.gold};

  .inner {
    padding: 0 2rem;
    display: grid;
    ${"" /* margin: 0 auto; */}
    .section--text {
      display: flex;
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
      display: flex;
      overflow: hidden;
      isolation: isolate;
      position: relative;

      img {
        width: 100%;
        position: relative;
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
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 0;
    .inner {
      padding: 0;
      max-width: 90vw;
      ${({ dir }) =>
        dir === "left" ? "margin-left: auto" : "margin-right: auto"};
      grid-template-columns: ${({ dir }) =>
        dir === "left" ? "1fr auto" : "auto 1fr"};

      .section--text {
        padding: 0 15rem;
      }

      .section--media {
        justify-content: flex-start;
        height: calc(100vh - 100px);
        border-right: 1px solid ${({ theme }) => theme.gold};
        border-left: 1px solid ${({ theme }) => theme.gold};
        img {
          height: 100%;
          width: auto;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .inner {
      .section--media {
        order: -1;
      }

      .section--text {
        .section-content > h1 {
          margin: 2rem 0 1rem;
          place-self: center;
        }
      }
    }
  }
`;

export { Section };
