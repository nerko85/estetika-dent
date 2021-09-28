import styled from "styled-components";

const Header = styled.header`
  position: relative;
  ${"" /* height: 100px; */}
  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.gold};
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: none;
  }
`;

export { Header, Logo, Navigation };
