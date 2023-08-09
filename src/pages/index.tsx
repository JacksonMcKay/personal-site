import { GithubIcon } from '@/components/GithubIcon';
import { IconLink } from '@/components/IconLink';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { Heading, SkipNavContent } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jackson McKay</title>
        <meta name='description' content="Jackson McKay's personal website" />
      </Head>

      <main className='p-4 flex flex-col justify-center items-center h-full'>
        <SkipNavContent />
        <Heading as='h1' size='4xl' className='pb-4 text-center' lineHeight={1.1}>
          Jackson McKay
        </Heading>
        <div className='flex items-center gap-3'>
          <IconLink href='https://github.com/JacksonMcKay' IconComponent={GithubIcon} text='GitHub' />

          <IconLink href='https://www.linkedin.com/in/jacksonmckay/' IconComponent={LinkedinIcon} text='LinkedIn' />
        </div>
      </main>
    </>
  );
}
