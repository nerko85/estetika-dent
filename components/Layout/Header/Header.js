import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscArrowRight, VscChromeClose, VscMenu } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Logo, Navigation, Header as StyledHeader } from "./Header.style";

export default function Header() {
  const [active, setActive] = useState(false);
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
                  <a>
                    Bukiraj onilie{" "}
                    <span>
                      <VscArrowRight />
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </Navigation>
          <div className="mobile--menu" onClick={() => setActive(!active)}>
            {active ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
