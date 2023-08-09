import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import styles from './IconLink.module.scss';

export function IconLink({
  href,
  text,
  IconComponent,
}: {
  href: string;
  IconComponent: ComponentWithAs<'svg', IconProps>;
  text: string;
}) {
  return (
    <a href={href} className={`flex flex-col items-center ${styles.iconLink}`} aria-label={text}>
      <IconComponent boxSize={[14, 14, 16]} className={styles.iconLink__icon} aria-hidden='true' />
      <div className={`mt-1 ${styles.iconLink__text}`}>{text}</div>
    </a>
  );
}
