import styled from "styled-components";

const Accordion = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.primary};
  color: #fff;

  .inner {
    max-width: 900px;

    h1 {
      margin-bottom: 5rem;
    }
  }
`;
const AccordionItem = styled.section`
  cursor: pointer;
  margin: 4rem 0;
  color: #fff;
  .title {
    padding-left: 5rem;
    position: relative;
    h3 {
      font-size: 3rem;
      margin: 1rem 0;
    }
    svg {
      position: absolute;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.gold};
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  p {
    padding-left: 5rem;
    display: none;
    line-height: 2;
  }

  &.active {
    .title {
      h3 {
        color: ${({ theme }) => theme.gold};
      }
      svg {
        color: #fff;
      }
    }
    p {
      display: block;
    }
  }
`;

export { Accordion, AccordionItem };
