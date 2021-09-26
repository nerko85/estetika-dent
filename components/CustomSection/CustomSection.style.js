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
      position: relative;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
`;

export { Section };
