import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Logo, Navigation, Header as StyledHeader } from "./Header.style";

export default function Header() {
  return (
    <StyledHeader>
      <div className="container-fluid">
        <div className="inner">
          <Logo>
            <Link href="/">
              <a>
                <Image src="/logo.svg" height="60" width="310" />
              </a>
            </Link>
          </Logo>
          <Navigation>
            <ul>
              <li>
                <Link href="/about">
                  <a>O nama</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Usluge i cjenovnik</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>Aktuelnosti</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li className="book-term">
                <Link href="/book">
                  <a>Bukiraj onilie</a>
                </Link>
              </li>
            </ul>
          </Navigation>
        </div>
      </div>
    </StyledHeader>
  );
}
