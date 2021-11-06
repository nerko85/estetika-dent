import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MenuModal from "../../MenuModal/MenuModal";

import { useRouter } from "next/router";

import { services } from "../../../data/services";

import { Logo, Navigation, Header as StyledHeader } from "./Header.style";

export default function Header() {
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive]=useState(false);
  const router = useRouter();

  function myTest() {
    setActive(!active);
    active
      ? (document.body.style.overflow = "")
      : (document.body.style.overflow = "hidden");
  }

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouterChange);
    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  });

  const handleRouterChange = () => {
    setActive(false);
    document.body.style.overflow = "";
  };

  const handleClick = (e)=>{
    e.preventDefault();
    // if(!e.target.className === "usluge") {
    //   setModalActive(false);
    // }
    setModalActive(!modalActive);
  }

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
          <Navigation active={active}>
            <ul>
              <li>
                <Link href="/about">
                  <a>O nama</a>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link  href="#">
                  <a className="usluge">Usluge i cjenovnik</a>
                </Link>
                { modalActive && <MenuModal/> }
                  <ul className="sub-list">
                  {
                  services.map((service,i)=>(
                      <li key={i} >
                          <Link href={`/services/${service.slug}`}>
                              <a>{service.title}</a>
                          </Link>
                      </li>
                  ))
                  }
                </ul> 
              </li>
              {/* <li>
                <Link href="/news">
                  <a>Aktuelnosti</a>
                </Link>
              </li> */}
              <li>
                <Link href="/contact">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li className="book-term">
                <Link href="/book">
                  <a>
                    Bukiraj oniline
                    <span>
                      <VscArrowRight />
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </Navigation>
          <div className="mobile--menu" onClick={myTest}>
            {active ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
