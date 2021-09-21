import styled from "styled-components";

const Slider = styled.div`
  background: ${({ type }) =>
    type == "services" ? "#141C5E" : "rgba(202,156,94,0.15)"};
  position: relative;

  .inner {
    margin: 0 auto;

    .swiper-wrapper {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export { Slider };
