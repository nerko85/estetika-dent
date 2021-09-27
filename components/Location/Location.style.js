import styled from "styled-components";

const Location = styled.div`
  display: flex;
  flex-directon: column;
  justify-content: center;

  .location--item {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        font-size: 2rem;
        span {
          padding: 1rem;
          border: 1px solid ${({ theme }) => theme.gold};
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
          font-size: 1.5rem;
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
`;

export { Location };
