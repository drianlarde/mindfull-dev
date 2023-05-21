import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavbarLogo = () => {
  return (
    <nav className="w-full p-10">
      <Link href="/">
        <Image
          src="/brand/logo-icon-text.svg"
          alt="Logo Icon Text"
          width={150}
          height={150}
        />
      </Link>
    </nav>
  );
};

export default NavbarLogo;
