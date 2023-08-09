import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function NavLink({ href, text }: { href: string; text: string }) {
  const color = useColorModeValue('border-zinc-800', 'border-zinc-200');
  const router = useRouter();
  return (
    <Link as={NextLink} href={href} className={`p-2 ${color} ${router.pathname === href ? 'border-t-2' : undefined}`}>
      {text}
    </Link>
  );
}
