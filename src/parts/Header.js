import React from "react";

import propTypes from "prop-types";

import { useRouter } from "next/router";

import Link from "next/link";

import Logo from "public/images/logo.svg";
import { route } from "next/dist/server/router";

export default function Header({ onLight }) {
  const linkcolor = onLight ? "text-grey-900" : "text-white";

  const router = useRouter();

  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className='flex justify-between items-center'>
      <div style={{ height: 54 }}>
        <Logo className='on-dark'></Logo>
      </div>
      <ul className='flex'>
        <li>
          <Link href='/'>
            <a
              className={[
                linkcolor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a
              className={[
                linkcolor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}>
              Pricing
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a
              className={[
                linkcolor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}>
              Features
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a
              className={[
                linkcolor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}>
              Story
            </a>
          </Link>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noereffer'
            href={linkCTA}
            className='bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6'>
            {textCTA}
          </a>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
