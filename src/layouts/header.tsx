import { Link } from 'react-router-dom';
import { IconFacebook, IconGithub, IconLinkedin, IconSun } from '../icons/social-icons';

const Header: React.FC = () => {
  const MENU_LIST = [
    {
      title: 'Information',
      to: '/'
    },
    {
      title: 'Project',
      to: '/project'
    },
    {
      title: 'Blog',
      to: '/blog'
    }
  ];

  const SOCIAL_LIST = [
    {
      icon: <IconFacebook w="18px" h="18px" color="#FFF" />,
      href: 'https://www.facebook.com'
    },
    {
      icon: <IconLinkedin w="18px" h="18px" color="#FFF" />,
      href: 'https://www.linkedin.com'
    },
    {
      icon: <IconGithub w="18px" h="18px" color="#FFF" />,
      href: 'https://www.github.com'
    }
  ];

  return (
    <nav className="w-full h-[120px] flex items-center justify-between px-28">
      <div>
        <h1 className="text-white text-[22px] font-bold">Profile</h1>
      </div>
      <ul className="flex items-center gap-16">
        {MENU_LIST.map((item) => {
          const { title, to } = item;
          return (
            <li key={to}>
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
              <a key={href} href={href}>
                {icon}
              </a>
            );
          })}

          <button type="button">
            <IconSun w="18px" h="18px" color="#FFF" />
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
