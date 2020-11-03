import React, {Component} from "react";
import style from "../../Static/Style";
import PopUp from "./PopUp";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <div>
        {style}
        <div className="header">
          <header class="site-header">
            <div class="wrapper site-header__wrapper">
              <Link href="/">
                <a className="logo">{this.props.header}</a>
              </Link>
              <nav class="nav">
                <button class="nav__toggle" aria-expanded="false" type="button">
                  menu
                </button>
                <ul class="nav__wrapper">
                  <li class="nav__item">
                    <Link href="/">
                      <a className="logo">Home</a>
                    </Link>
                  </li>
                  <li class="nav__item">
                    <Link href="/Search">
                      <a className="logo">Search</a>
                    </Link>
                  </li>
                  <li class="nav__item">
                    <Link href="/Add">
                      <a className="logo">Add</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
