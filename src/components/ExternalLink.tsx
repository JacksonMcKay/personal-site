import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

export function ExternalLink({ text, ...linkProps }: { href: string; text: string } & LinkProps) {
  const color = useColorModeValue('cyan.800', 'cyan.400');

  return (
    <Link
      {...linkProps}
      color={color}
      isExternal
      display='inline-flex'
      alignItems='center'
      gap={1}
      fontWeight='semibold'
      className='underline'
    >
      {text} <ExternalLinkIcon />
    </Link>
  );
}
