import React from "react";
import Link from "next/link";
import NavLink from '../elements/NavLink';
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";



const Nav = ({ pages }) => {
  const { siteName } = useContext(GlobalContext);

  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
  
            <p className="logo">
              <Link href="/">
                <a>{siteName}</a>
              </Link>
            </p>

        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {pages.map((page) => {
              return (
                <li key={page.id}>
                  <NavLink as={`/${page.slug}`} href={`/${page.slug}`}>
                    <a>{page.title} </a>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;