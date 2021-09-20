import styled from "styled-components";

const Header = styled.header`
  position: relative;
  height: 100px;
  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.gold};
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
`;

const Logo = styled.h1`
  color: #fff;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 4rem;
      a {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export { Header, Logo, Navigation };
