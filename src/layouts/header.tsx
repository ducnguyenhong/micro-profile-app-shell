import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconFacebook, IconGithub, IconLinkedin, IconMoon, IconSun } from '../icons/social-icons';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const MENU_LIST = [
    {
      title: 'Information',
      to: '/',
      icon: '/images/react.png'
    },
    {
      title: 'Project',
      to: '/project',
      icon: '/images/vue.png'
    },
    {
      title: 'Blog',
      to: '/blog',
      icon: '/images/angular.png'
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
    <nav className="w-full h-[120px] flex items-center justify-between px-28">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" className="w-8 h-8" />
        <h1 className="text-white text-[22px] font-bold">Profile</h1>
      </Link>
      <ul className="flex items-center gap-16">
        {MENU_LIST.map((item) => {
          const { title, to, icon } = item;
          return (
            <li key={to} className="flex items-center gap-2">
              <img src={icon} className="h-4 h-w object-cover" />
              <Link to={to}>
                <span className="text-white font-semibold text-[16px]">{title}</span>
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
            {darkMode ? <IconSun w="18px" h="18px" color="#e6e6e6" /> : <IconMoon w="16px" h="16px" color="#e6e6e6" />}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
