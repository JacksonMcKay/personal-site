import { ExternalLink } from '@/components/ExternalLink';
import { Card, Container, Flex, Heading, SkipNavContent, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import countriesAppDark from '../../public/countries-dark.png';
import countriesAppLight from '../../public/countries-light.png';

export default function Projects() {
  const countriesAppImgSrc = useColorModeValue(countriesAppLight.src, countriesAppDark.src);

  return (
    <>
      <Head>
        <title>Projects - Jackson McKay</title>
        <meta name='description' content="Jackson McKay's personal projects" />
      </Head>
      <main className='p-4 pt-16'>
        <SkipNavContent />
        <Container maxW='4xl' padding={2}>
          <Heading as='h1' className='pb-8 text-center'>
            Projects
          </Heading>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className='flex flex-col shrink grow basis-2 min-w-[16rem] max-w-xl py-2'>
                <Heading as='h2' size='lg' pb={4}>
                  Color Delta (WIP)
                </Heading>
                <Text pb={4}>Finds the closest color to the input given a set of colors.</Text>

                <div>
                  <Text fontWeight={500}>Live</Text>
                  <ExternalLink href='https://colordelta.jacksonmckay.dev/' text='colordelta.jacksonmckay.dev' pl={4} />
                  <Text fontWeight={500} className='mt-2'>
                    Source code
                  </Text>
                  <ExternalLink
                    href='https://github.com/JacksonMcKay/color-delta'
                    text='JacksonMcKay/color-delta'
                    pl={4}
                  />
                  <Text fontWeight={500} className='mt-2'>
                    Tools
                  </Text>

                  <Flex gap={2} pl={4} flexWrap='wrap'>
                    <ExternalLink href='https://nextjs.org/' text='Next.js' />
                    <ExternalLink href='https://react.dev/' text='React' />
                    <ExternalLink href='https://tailwindcss.com/' text='Tailwind CSS' />
                    <ExternalLink href='https://chakra-ui.com/' text='Chakra UI' />
                  </Flex>
                </div>
              </div>
              <Card width={460} height={318} alignItems='center' justifyContent='center' aria-hidden='true'>
                <span>Screenshot coming soon</span>
              </Card>
            </div>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className='flex flex-col shrink grow basis-2 min-w-[16rem] max-w-xl py-2'>
                <Heading as='h2' size='lg' pb={4}>
                  Countries
                </Heading>
                <Text pb={4}>
                  An app that displays various information about countries. Uses the{' '}
                  <ExternalLink href='https://restcountries.com/' text='restcountries.com' /> API.
                </Text>

                <div>
                  <Text fontWeight={500}>Live</Text>
                  <ExternalLink href='https://countries.jacksonmckay.dev/' text='countries.jacksonmckay.dev' pl={4} />
                  <Text fontWeight={500} className='mt-2'>
                    Source code
                  </Text>
                  <ExternalLink
                    href='https://github.com/JacksonMcKay/countries-app'
                    text='JacksonMcKay/countries-app'
                    pl={4}
                  />
                  <Text fontWeight={500} className='mt-2'>
                    Tools
                  </Text>
                  <Flex gap={2} pl={4} flexWrap='wrap'>
                    <ExternalLink href='https://nextjs.org/' text='Next.js' />
                    <ExternalLink href='https://react.dev/' text='React' />
                    <ExternalLink href='https://tailwindcss.com/' text='Tailwind CSS' />
                    <ExternalLink href='https://chakra-ui.com/' text='Chakra UI' />
                  </Flex>
                </div>
              </div>
              <Image src={countriesAppImgSrc} alt='' width={460} height={318} className='rounded-lg' />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
