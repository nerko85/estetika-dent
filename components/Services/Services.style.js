import styled from "styled-components";

const Services = styled.section`
  background: ${({ theme }) => theme.primary};

  .inner {
    padding: 5rem 0;
    border-left: 1px solid ${({ theme }) => theme.gold};
    border-right: 1px solid ${({ theme }) => theme.gold};
    h1 {
      margin: 5rem 0 10rem;
      color: #fff;
      text-align: center;
    }

    .swiper-container {
      margin: 0 60px;

      .swiper-pagination {
        bottom: 0;
        .swiper-pagination-bullet {
          height: 16px;
          width: 16px;
          background: rgba(202, 156, 94, 0.2);
          opacity: 1;
          border: 1px solid ${({ theme }) => theme.gold};

          &.swiper-pagination-bullet-active {
            background: ${({ theme }) => theme.gold};
          }
        }
      }

      .swiper-slide {
        margin-bottom: 5rem;
      }
    }
  }
`;

export { Services };
