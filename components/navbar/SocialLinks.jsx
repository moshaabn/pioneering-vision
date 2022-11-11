const SocialLinks = () => {
  return (
    <ul className="social">
      <li className="social__item">
        <a href="tel:+966544223324" className="social__link">
          <img src="/imgs/phone.svg" alt="phone-call" />
        </a>
      </li>
      <li className="social__item">
        <a
          href="http://wa.me/+966544223324"
          className="social__link"
          target="_blank"
        >
          <img src="/imgs/whatsapp.svg" alt="whatsapp" />
        </a>
      </li>
      <li className="social__item">
        <a
          href="https://www.instagram.com/g20yeasaudi/?igshid=YmMyMTA2M2Y%3D"
          className="social__link"
        >
          <img src="/imgs/instagram.svg" alt="instagram" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://twitter.com/G20YEAKSA" className="social__link">
          <img src="/imgs/twitter.png" alt="twitter" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
