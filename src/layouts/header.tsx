import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../components/drawer';
import { IconMenu } from '../icons/common';
import { IconFacebook, IconGithub, IconLinkedin, IconMoon, IconSun } from '../icons/social-icons';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

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
              <li key={to}>
                <Link to={to} className="flex items-center gap-2">
                  <img src={icon} className="h-4 w-4 object-cover" />
                  <div className="group flex flex-col gap-[1px]">
                    <span className="text-white font-semibold text-[16px]">{title}</span>
                    <div className="flex justify-center">
                      <div className="w-[0px] h-[1px] bg-gradient-to-r from-[#56b617] to-[#068414] group-hover:w-full duration-300" />
                    </div>
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

      <nav className="z-10 fixed top-0 left-0 flex w-full lg:hidden h-[70px] bg-[#130f28] justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpenMenuMobile(false)}>
          <img src="/images/logo.png" className="w-10 h-10" />
        </Link>

        <Drawer open={openMenuMobile} side="left" setOpen={setOpenMenuMobile}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="h-[70px] flex items-center px-4">
                <Link to="/" className="flex items-center gap-3">
                  <img src="/images/logo.png" className="w-10 h-10" />
                  <h1 className="text-white text-[18px] font-bold">Profile</h1>
                </Link>
              </div>
              <div className="w-full h-[1px] bg-[#303030]" />
              <ul className="flex flex-col gap-4 p-4">
                {MENU_LIST.map((item) => {
                  const { title, to, icon } = item;
                  return (
                    <li key={to}>
                      <Link to={to} className="flex items-center gap-2.5" onClick={() => setOpenMenuMobile(false)}>
                        <img src={icon} className="h-5 w-5 object-cover" />
                        <span className="text-[#e6e6e6] font-semibold text-[16px]">{title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-3 pb-5">
              {SOCIAL_LIST.map((social) => {
                const { icon, href } = social;
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    className="w-10 h-10 rounded-md bg-[#e6e6e617] flex items-center justify-center hover:bg-[#e6e6e63d] duration-200"
                    onClick={() => setOpenMenuMobile(false)}
                  >
                    {icon}
                  </a>
                );
              })}

              <button
                type="button"
                className="w-10 h-10 rounded-md bg-[#e6e6e617] flex items-center justify-center hover:bg-[#e6e6e63d] duration-200"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? (
                  <IconSun w="18px" h="18px" color="#e6e6e6" />
                ) : (
                  <IconMoon w="16px" h="16px" color="#e6e6e6" />
                )}
              </button>
            </div>
          </div>
        </Drawer>

        <button type="button" onClick={() => setOpenMenuMobile(true)}>
          <IconMenu color="#FFF" w="35px" h="35px" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
