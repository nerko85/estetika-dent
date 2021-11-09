import React from "react";
import { Footer as StyledFooter } from "./Footer.style";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { company } from "../../../data";

export default function Footer() {
  const {
    workingHours: { from, to },
    phone,
    mobile,
    email
  } = company.address[0];
  return (
    <StyledFooter>
      <div className="container">
        <h1>
          <Link href="/">
            <a>
              <Image src="/footer-logo.svg" width="220" height="55" />
            </a>
          </Link>
        </h1>
        <div className="inner">
          <div className="details">
              <div key={company.address[0].id} className="details--item">
                <h3>{company.address[0].location}</h3>
                <p>{phone}</p>
                <p>{mobile}</p>
                <p>{email}</p>
              </div>
          </div>
          <ul className="footer--links">
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
          </ul>
          <div className="social">
            <h3>Pratite nas</h3>
            <ul>
              <li>
                <Link href="https://www.facebook.com/estetikadent.ba">
                  <a target="_blank">
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/estetika__dent/">
                  <a target="_blank">
                    <FaInstagram />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
