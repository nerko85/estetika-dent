import styled from "styled-components";

const Slider = styled.div`
  padding: 0 12rem;
  background: ${({ type }) =>
    type == "services" ? "#141C5E" : "rgba(202,156,94,0.15)"};
  position: relative;
`;

export { Slider };
