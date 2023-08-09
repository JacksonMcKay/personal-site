import { ExternalLink } from '@/components/ExternalLink';
import { Container, Heading, SkipNavContent, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import countriesAppDark from '../../public/countries-dark.png';
import countriesAppLight from '../../public/countries-light.png';
import Head from 'next/head';

export default function Projects() {
  const countriesAppImgSrc = useColorModeValue(countriesAppLight.src, countriesAppDark.src);

  return (
    <>
      <Head>
        <title>Projects - Jackson McKay</title>
        <meta name='description' content="Jackson McKay's personal projects" />
      </Head>
      <main className='p-4 pb-16 flex flex-col justify-center items-center h-full'>
        <SkipNavContent />
        <Container maxW='4xl' padding={2}>
          <Heading as='h1' className='pb-8 text-center sr-only'>
            Projects
          </Heading>
          <div className='flex flex-wrap gap-4 justify-center'>
            <div className='flex flex-col justify-between shrink grow basis-2 min-w-[16rem] max-w-xl py-2'>
              <Heading as='h2' size='lg' pb={4}>
                Countries app
              </Heading>
              <Text pb={4}>
                An app that displays various information about countries. Uses the{' '}
                <ExternalLink href='https://restcountries.com/' text='restcountries.com' /> API. Written in Next.js.
              </Text>

              <div>
                <Text>Live</Text>
                <ExternalLink href='https://countries.jacksonmckay.dev/' text='countries.jacksonmckay.dev' pl={4} />
                <Text className='mt-2'>Source code</Text>
                <ExternalLink
                  href='https://github.com/JacksonMcKay/countries-app'
                  text='JacksonMcKay/countries-app'
                  pl={4}
                />
              </div>
            </div>
            <Image src={countriesAppImgSrc} alt='' width={460} height={318} className='rounded-lg' />
          </div>
        </Container>
      </main>
    </>
  );
}
