import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.beige};
  border-top: 1px solid ${({ theme }) => theme.gold};
  border-bottom: 1px solid ${({ theme }) => theme.gold};

  .inner {
    width: 88%;
    margin-right: auto;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 3fr 2fr;
    }

    .section--text {
      max-width: 70%;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${({ theme }) => theme.text};
      font-family: ${({ theme }) => theme.heading};

      h1 {
        margin-bottom: 5rem;
        color: ${({ theme }) => theme.gold};
        font-family: ${({ theme }) => theme.heading};
      }
    }

    .section--media {
      border-right: 1px solid ${({ theme }) => theme.gold};
      order: -1;
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
