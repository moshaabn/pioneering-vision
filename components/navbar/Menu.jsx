import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <nav className="navbar-menu">
        <ul className="navbar-menu__list" onClick={() => setOpen(false)}>
          <img src="/imgs/logo.png" alt="logo" className="logo" />

          <li className="navbar-menu__item">
            <Link href="/" className="navbar-menu__link">
              نبذة عنا
            </Link>
          </li>
          <li className="navbar-menu__item">
            <Link href="/program" className="navbar-menu__link">
              برامجنا
            </Link>
          </li>
          <li className="navbar-menu__item">
            <Link
              href="/regulations-and-policies"
              className="navbar-menu__link"
            >
              اللوائح و السياسات
            </Link>
          </li>
          <li className="navbar-menu__item">
            <Link href="/volunteering" className="navbar-menu__link">
              التطوع
            </Link>
          </li>
          <li className="navbar-menu__item">
            <Link href="/contact" className="navbar-menu__link">
              تواصل معنا
            </Link>
          </li>
        </ul>
        <button onClick={() => setOpen(false)} className="navbar-menu__close">
          &#128473;
        </button>
      </nav>
    );
  }

  return (
    <nav className="menu-nav">
      <ul className="menu-nav__list">
        <li className="menu-nav__item">
          <Link href="/" passHref>
            <img src="/imgs/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        <li className="menu-nav__item">
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
