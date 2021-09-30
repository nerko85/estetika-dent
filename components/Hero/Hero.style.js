import styled from "styled-components";

const Hero = styled.section`
  min-height: calc(100vh - 100px);
  background: ${({ theme }) => theme.primary};

  .inner {
    margin-left: auto;
    display: grid;
    min-height: calc(100vh - 100px);

    @media (min-width: ${({ theme }) => theme.tablet}) {
      grid-template-columns: 1fr auto;
    }

    .hero--text {
      padding: 0 15rem;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      color: #fff;
      font-family: ${({ theme }) => theme.heading};

      h1 {
        margin-bottom: 5rem;
        color: #fff;
        ${"" /* max-width: 60%; */}
        font-family: ${({ theme }) => theme.heading};
      }
    }

    .hero--img {
      height: calc(100vh - 100px);
      display: flex;
      justify-content: flex-end;
      overflow: hidden;
      position: relative;
      border-left: 1px solid ${({ theme }) => theme.gold};
      isolation: isolate;
      z-index: 999;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #141c5eed, #fff0 50%);
        opacity: 1;
        isolation: isolate;
      }

      img {
        height: 100%;
        width: auto;
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

        blockquote {
          line-height: 1.5;
          color: #fff;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      .hero--text {
        padding: 0 3rem;
      }
      .hero--img {
        display: none;
      }
    }
  }
`;

export { Hero };
