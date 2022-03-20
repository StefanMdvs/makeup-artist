import React from "react";
import { ReactComponent as Logo } from '../../../logo.svg'

import { Navbar } from "../../common";

import './Header.css';

function Header () {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
        <Logo className="header-logo"/>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
        <hr className="header-top__separator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          07711946781
        </section>
        <section className="header-bottom__email">
          stefan.medves@gmail.com
        </section>
      </section>
    </section>
  )
}

export default Header;