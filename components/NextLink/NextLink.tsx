import Link from 'next/link';

export function NextLink({ href, ...others }: any) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...others} />
    </Link>
  );
}
