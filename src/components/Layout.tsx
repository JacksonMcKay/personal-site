import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, SkipNavLink, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { NavLink } from './NavLink';

export function Layout({ children }: { children: ReactNode }) {
  const { toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <header className='flex justify-end items-center gap-4 px-4 py-2 absolute right-0'>
        <nav className='flex gap-4 items-center'>
          <NavLink href='/' text='Home' />
          <NavLink href='/projects' text='Projects' />
        </nav>
        <IconButton aria-label='Toggle theme' icon={themeIcon} onClick={toggleColorMode} />
      </header>
      {children}
    </>
  );
}
