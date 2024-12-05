import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../components/drawer';
import { IconFacebook, IconGithub, IconLinkedin, IconMoon, IconSun } from '../icons/social-icons';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [openLeft, setOpenLeft] = useState(false);

  const MENU_LIST = [
    {
      title: 'Information',
      to: '/',
      icon: '/images/React.webp'
    },
    {
      title: 'Project',
      to: '/project',
      icon: '/images/Vue.webp'
    },
    {
      title: 'Blog',
      to: '/blog',
      icon: '/images/Angular.webp'
    }
  ];

  const SOCIAL_LIST = [
    {
      icon: <IconFacebook w="18px" h="18px" color="#e6e6e6" />,
      href: 'https://www.facebook.com/ducnh99'
    },
    {
      icon: <IconLinkedin w="19px" h="19px" color="#e6e6e6" />,
      href: 'https://linkedin.com/in/ducnh99'
    },
    {
      icon: <IconGithub w="18px" h="18px" color="#e6e6e6" />,
      href: 'https://github.com/ducnguyenhong'
    }
  ];

  return (
    <header>
      <nav className="hidden lg:flex header w-full h-[120px] items-center justify-between px-28">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" className="w-12 h-12" />
          <h1 className="text-white text-[22px] font-bold">Profile</h1>
        </Link>
        <ul className="flex items-center gap-16">
          {MENU_LIST.map((item) => {
            const { title, to, icon } = item;
            return (
              <li key={to} className="flex items-center gap-2">
                <img src={icon} className="h-4 h-w object-cover" />
                <Link to={to} className="group flex flex-col gap-[1px]">
                  <span className="text-white font-semibold text-[16px]">{title}</span>
                  <div className="flex justify-center">
                    <div className="w-[0px] h-[1px] bg-gradient-to-r from-[#56b617] to-[#068414] group-hover:w-full duration-300" />
                  </div>
                </Link>
              </li>
            );
          })}

          <div className="flex items-center gap-3">
            {SOCIAL_LIST.map((social) => {
              const { icon, href } = social;
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  className="w-7 h-7 rounded-md bg-[#e6e6e617] flex items-center justify-center hover:bg-[#e6e6e63d] duration-200"
                >
                  {icon}
                </a>
              );
            })}

            <button
              type="button"
              className="w-7 h-7 rounded-md bg-[#e6e6e617] flex items-center justify-center hover:bg-[#e6e6e63d] duration-200"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? (
                <IconSun w="18px" h="18px" color="#e6e6e6" />
              ) : (
                <IconMoon w="16px" h="16px" color="#e6e6e6" />
              )}
            </button>
          </div>
        </ul>
      </nav>

      <nav className="flex lg:hidden h-[70px] bg-[#e6e6e62e] justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" className="w-10 h-10" />
        </Link>

        <button type="button" onClick={() => setOpenLeft(true)}>
          <img src="https://cdn-icons-png.flaticon.com/128/7711/7711100.png" className="w-8 h-8" />
        </button>

        <Drawer open={openLeft} side="left" setOpen={setOpenLeft} />
      </nav>
    </header>
  );
};

export default Header;
