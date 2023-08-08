import { GithubIcon } from '@/components/GithubIcon';
import { IconLink } from '@/components/IconLink';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Heading, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);
  return (
    <>
      <Head>
        <title>Jackson McKay</title>
        <meta name='description' content="Jackson McKay's personal website" />
      </Head>
      <main className='p-4 flex flex-col justify-center items-center h-full'>
        <Heading as='h1' size='4xl' className='pb-4 text-center' lineHeight={1.1}>
          Jackson McKay
        </Heading>
        <div className='flex items-center gap-3'>
          <IconLink href='https://github.com/JacksonMcKay' IconComponent={GithubIcon} text='GitHub' />

          <IconLink href='https://www.linkedin.com/in/jacksonmckay/' IconComponent={LinkedinIcon} text='LinkedIn' />
        </div>
        <IconButton
          aria-label='Toggle theme'
          icon={themeIcon}
          onClick={toggleColorMode}
          style={{
            position: 'absolute',
            bottom: '1rem',
          }}
        />
      </main>
    </>
  );
}
