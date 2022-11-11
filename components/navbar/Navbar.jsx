import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/" passHref>
            <img src="/imgs/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/" className="nav__link">
            نبذة عنا
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/program" className="nav__link">
            برامجنا
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/regulations-and-policies" className="nav__link">
            اللوائح و السياسات
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/volunteering" className="nav__link">
            التطوع
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/contact" className="nav__link">
            تواصل معنا
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
