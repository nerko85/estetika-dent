import styled from "styled-components";

const ContactStrip = styled.section`
  padding: 2rem;
  color: ${({ theme }) => theme.gold};
  text-align: center;
  span {
    font-size: 3rem;
  }
`;

export { ContactStrip };
