import { Box, Link as ChakraLink, Flex, Text } from '@chakra-ui/react';
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
    <Flex as="nav" w="full" h="120px" align="center" justify="space-between" px={28}>
      <Box>
        <Text as="h1" color="#FFF" fontSize={22} fontWeight={700}>
          Profile
        </Text>
      </Box>
      <Flex as="ul" align="center" gap={16}>
        {MENU_LIST.map((item) => {
          const { title, to } = item;
          return (
            <li key={to}>
              <Link to={to}>
                <Text as="span" color="#FFF" fontWeight={600} fontSize={16}>
                  {title}
                </Text>
              </Link>
            </li>
          );
        })}

        <Flex align="center" gap={3}>
          {SOCIAL_LIST.map((social) => {
            const { icon, href } = social;
            return (
              <ChakraLink key={href} href={href}>
                {icon}
              </ChakraLink>
            );
          })}

          <button type="button">
            <IconSun w="18px" h="18px" color="#FFF" />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
