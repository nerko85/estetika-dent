import React from "react";
import { Footer as StyledFooter } from "./Footer.style";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { company } from "../../../data";

export default function Footer() {
  console.log(company);
  return (
    <StyledFooter>
      <div className="container">
        <h1>
          <Image src="/footer-logo.svg" width="220" height="55" />
        </h1>
        <div className="inner">
          <div className="details">
            {company?.address.map((address) => {
              const {
                workingHours: { from, to },
                phone,
              } = address;
              return (
                <div key={address.id} className="details--item">
                  <h3>{address.location}</h3>
                  <p>
                    {from.day} - {to.day}:{from.hour} - {to.hour}
                  </p>
                  <p>{phone}</p>
                </div>
              );
            })}
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
          </ul>
          <div className="social">
            <h3>Pratite nas</h3>
            <ul>
              <li>
                <Link href="www.facebook.com">
                  <a target="_blank">
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="www.instagram.com">
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
