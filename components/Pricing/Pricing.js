import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Pricing() {
  return (
    <PricingStrip>
      <div className="container-fluid">
        <div className="inner">
          <div className="pricing">
            <Link href="/services">
              <a>
                <h1>Pogledajte cjenovnik</h1>
              </a>
            </Link>
          </div>
          <div className="contact">
            <Link href="/contact">
              <a>
                <h1>Kontaktirajte nas</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </PricingStrip>
  );
}

const PricingStrip = styled.section`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.gold};
  border-top: 1px solid ${({ theme }) => theme.gold};
  border-bottom: 1px solid ${({ theme }) => theme.gold};
  .inner {
    & > * {
      padding: 2rem 0;
      flex: 1;
    }
    .pricing {
      border-bottom: 1px solid ${({ theme }) => theme.gold};
    }
    h1 {
      text-align: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .inner {
      display: flex;
      .pricing {
        border-right: 1px solid ${({ theme }) => theme.gold};
      }
    }
  }
`;
