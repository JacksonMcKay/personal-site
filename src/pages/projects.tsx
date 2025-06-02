import { ExternalLink } from '@/components/ExternalLink';
import { Container, Heading, SkipNavContent, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment, ReactNode } from 'react';
import countriesAppDark from '../../public/countries-dark.png';
import countriesAppLight from '../../public/countries-light.png';
import moveTabsAndGroupsDark from '../../public/move-tabs-and-groups-dark.png';
import moveTabsAndGroupsLight from '../../public/move-tabs-and-groups-light.png';
import bboxyImgSrc from '../../public/bboxy.png';

interface Project {
  name: string;
  description: string | ReactNode;
  links: {
    heading: string;
    href: string;
    text: string;
  }[];
  imageSrc: { src: string; width: number; height: number } | undefined;
}

export default function Projects() {
  const countriesAppImgSrc = useColorModeValue(countriesAppLight.src, countriesAppDark.src);
  const moveTabsAndGroupsImgSrc = useColorModeValue(moveTabsAndGroupsLight.src, moveTabsAndGroupsDark.src);

  const projects: Project[] = [
    {
      name: 'bboxy',
      description:
        'Create a bounding box on a map and share it with others via URL or copy the coordinates themselves.',
      links: [
        {
          heading: 'Live',
          href: 'https://bboxy.jacksonmckay.dev/',
          text: 'bboxy.jacksonmckay.dev',
        },
        {
          heading: 'Source code',
          href: 'https://github.com/JacksonMcKay/bboxy',
          text: 'JacksonMcKay/bboxy',
        },
      ],
      imageSrc: { src: bboxyImgSrc.src, width: 395, height: 400 },
    },
    {
      name: 'Move tabs and groups',
      description: 'A Chrome extension that allows you to move tabs and tab groups around using keyboard shortcuts.',
      links: [
        {
          heading: 'Link',
          href: 'https://chromewebstore.google.com/detail/move-tabs-and-groups/kccnmjkpiedjlkkpnlbbbjhpjklibcmm',
          text: 'Chrome Web Store',
        },
        {
          heading: 'Source code',
          href: 'https://github.com/JacksonMcKay/move-tabs-and-groups',
          text: 'JacksonMcKay/move-tabs-and-groups',
        },
      ],
      imageSrc: { src: moveTabsAndGroupsImgSrc, width: 400, height: 394 },
    },
    {
      name: 'Color delta',
      description: (
        <div className='flex flex-col gap-2'>
          <p>
            Given an input color and a palette, it determines which palette colors most closely match the input color.
          </p>
          <p>A little rough around the edges as I never found the time to polish it but I think it&apos;s cool.</p>
          <p>
            Uses <ExternalLink href='https://culorijs.org/' text='culorijs' /> under the hood to do the color maths.
          </p>
        </div>
      ),
      links: [
        {
          heading: 'Live',
          href: 'https://colordelta.jacksonmckay.dev/',
          text: 'colordelta.jacksonmckay.dev',
        },
        {
          heading: 'Source code',
          href: 'https://github.com/JacksonMcKay/color-delta',
          text: 'JacksonMcKay/color-delta',
        },
      ],
      imageSrc: undefined,
    },
    {
      name: 'Countries app',
      description: (
        <>
          An app that displays various information about countries. Uses the{' '}
          <ExternalLink href='https://restcountries.com/' text='restcountries.com' /> API. Written in Next.js.
        </>
      ),
      links: [
        {
          heading: 'Live',
          href: 'https://countries.jacksonmckay.dev/',
          text: 'countries.jacksonmckay.dev',
        },
        {
          heading: 'Source code',
          href: 'https://github.com/JacksonMcKay/countries-app',
          text: 'JacksonMcKay/countries-app',
        },
      ],
      imageSrc: { src: countriesAppImgSrc, width: 460, height: 318 },
    },
  ];

  const forks: Omit<Project, 'imageSrc'>[] = [];

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
          <div className='flex flex-col gap-8'>
            {projects.map((project, index) => (
              <Fragment key={project.name}>
                <div className='flex flex-wrap gap-4 items-start'>
                  <div className='flex flex-col gap-3 shrink grow basis-2 min-w-[16rem] py-2'>
                    <Heading as='h2' size='lg' pb={4}>
                      {project.name}
                    </Heading>
                    <div className='pb-4'>{project.description}</div>

                    <div className='flex flex-col gap-2'>
                      {project.links.map((link) => (
                        <div key={link.heading} className='flex flex-col'>
                          <Text>{link.heading}</Text>
                          <ExternalLink href={link.href} text={link.text} pl={4} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.imageSrc && (
                    <Image
                      src={project.imageSrc}
                      alt=''
                      width={project.imageSrc.width}
                      height={project.imageSrc.height}
                      className='rounded-lg shrink-0 grow-0 self-center'
                    />
                  )}
                </div>
                {index < projects.length - 1 && <hr />}
              </Fragment>
            ))}
          </div>
          {forks.length > 0 && (
            <>
              <Heading as='h1' className='pt-24 pb-2 text-center'>
                Forks
              </Heading>
              <Text textAlign={'center'}>I didn&apos;t make these but I&apos;ve remixed them to suit my needs.</Text>
            </>
          )}
          {forks.map((fork) => (
            <Fragment key={fork.name}>
              <Heading as='h2' size='lg' pt={6} pb={4}>
                {fork.name}
              </Heading>
              <p className='pb-3'>{fork.description}</p>
              {fork.links.map((link) => (
                <div key={link.heading} className='flex flex-col'>
                  <Text>{link.heading}</Text>
                  <ExternalLink href={link.href} text={link.text} pl={4} />
                </div>
              ))}
            </Fragment>
          ))}
        </Container>
      </main>
    </>
  );
}
