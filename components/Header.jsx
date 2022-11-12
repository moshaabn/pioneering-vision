import { useLayoutEffect, useState } from 'react';
import Menu from './navbar/Menu';
import Navbar from './navbar/Navbar';
import SocialLinks from './navbar/SocialLinks';

const Header = () => {
  const [mobileScreen, setMobileScreen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {mobileScreen ? (
        <Menu />
      ) : (
        <>
          <SocialLinks />
          <Navbar />
        </>
      )}
    </header>
  );
};

export default Header;
