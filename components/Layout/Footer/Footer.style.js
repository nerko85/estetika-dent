import styled from "styled-components";

const Footer = styled.footer`
  padding: 8rem 0;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.font};
  .inner {
    ul {
      list-style: none;
    }

    .details {
      .details--item {
        &:first-child {
          margin-bottom: 4rem;
        }
        h3 {
          font-family: ${({ theme }) => theme.heading};
          color: ${({ theme }) => theme.gold};
        }
      }
    }

    .footer--links {
      text-transform: uppercase;
      margin-left: 8rem;
      li {
        margin-bottom: 1rem;
        a {
          font-size: 1.7rem;
          line-height: 1.7;
        }
      }
    }

    .social {
      margin-left: 8rem;
      h3 {
        margin-bottom: 2rem;
      }
      ul {
        display: flex;
        li {
          padding: 1rem;
          border: 1px solid #fff;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1.6rem;
          cursor: pointer;
          transition: background 0.5s ease;
          line-height: 0;
          svg {
            color: ${({ theme }) => theme.gold};
          }

          &:hover {
            background: ${({ theme }) => theme.gold};
            svg {
              color: #fff;
            }
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 4rem 0;
    .inner {
      & > * {
        margin-bottom: 2rem;
      }
      .footer--links,
      .social {
        margin-left: 0;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    .inner {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
  }
`;

export { Footer };
