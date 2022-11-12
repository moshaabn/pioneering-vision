import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="menu-nav">
      <ul className="menu-nav__list">
        <li className="menu-nav__item">
          <Link href="/" passHref>
            <img src="/imgs/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        <li className="menu-nav__item">
          <div className="menu-icon">
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
