import styled from "styled-components";

const Header = styled.header`
  ${"" /* position: relative; */}
  ${"" /* height: 100px; */}
  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.gold};
  .inner {
    min-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile--menu {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .mobile--menu {
      display: inline-block;
      z-index: 9999;
      svg {
        font-size: 3rem;
        color: #fff;
      }
    }
  }
`;

const Logo = styled.h1`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 5rem;
  a {
    display: flex;
  }
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 3.5rem 3rem;
      a {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.font};
      }
    }

    .book-term {
      border-left: 1px solid ${({ theme }) => theme.gold};
      span {
        margin-left: 1rem;
        color: ${({ theme }) => theme.gold};
      }

      &:hover svg {
        animation: ${({ theme }) => theme.arrow} 1s ease infinite;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    inset: 0;
    z-index: 999;
    display: flex;
    transform: translateX(-100%);
    transform: ${({ active }) =>
      active ? "translateX(0%);" : "translateX(-100%)"};
    transition: transform 1s ease;
    ul {
      flex-direction: column;
      margin: auto;

      li {
        padding: 2rem 0;

        &.book-term {
          border-top: 1px solid ${({ theme }) => theme.gold};
          border-left: 0;
        }

        a {
          font-size: 2rem;
        }
      }
    }
  }
`;

export { Header, Logo, Navigation };
