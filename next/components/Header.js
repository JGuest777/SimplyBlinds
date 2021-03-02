import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Menu from './Menu';

export default function Header({ toggleOverlay, setToggleOverlay }) {
  const links = [
    {
      slug: '',
      name: 'home',
    },
    {
      slug: 'about',
      name: 'about',
    },
    {
      slug: 'showroom',
      name: 'showroom',
    },
    {
      slug: 'contact',
      name: 'contact',
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  const transitions = useTransition(toggleMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOverlay(!toggleOverlay);
  };

  return (
    <header className="header">
      <nav>
        {/* Mobile Icons & Burger Menu */}
        <a
          onClick={handleToggleMenu}
          className={`header__burger ${toggleMenu && 'open'} hide-desktop`}
        >
          <div />
          <div />
          <div />
        </a>

        {/* Desktop Links */}
        <div className="header__links hide-mobile">
          {links.map((link) => (
            <Link href={`/${link.slug}`} key={uuidv4()}>
              <a>{link.name}</a>
            </Link>
          ))}
        </div>
      </nav>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="header__menu">
              <Menu
                links={links}
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                setToggleOverlay={setToggleOverlay}
              />
            </animated.div>
          )
      )}
    </header>
  );
}
