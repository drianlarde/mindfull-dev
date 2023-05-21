import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';
import Link from 'next/link';

export default function Navbar() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [isNearTop, setIsNearTop] = useState(true);

  useEffect(() => yRange.onChange((v) => setIsNearTop(v < 0.05)), [yRange]);

  const variants = {
    hidden: { y: '-100%' },
    show: { y: '0%', transition: { duration: 0.5 } },
    exit: { y: '-100%', transition: { duration: 0.5 } }
  };

  return (
    <motion.nav
      className="fixed flex w-full items-center justify-between gap-[4vw] bg-gray-0 px-20 py-4 text-xs"
      variants={variants}
      initial="hidden"
      animate={isNearTop ? 'show' : 'exit'}
      exit="exit"
    >
      <h1 className="text-xl font-bold text-brand-500">mindFull</h1>

      {/* Search Bar */}
      <section className="flex w-96 items-center justify-between gap-4 rounded-full px-4 py-2 outline outline-1 outline-stroke-dark">
        <div className="flex w-full gap-2">
          <IconSearch className="h-auto w-4 min-w-[1em]" />
          <input
            type="text"
            placeholder="Search Jobs"
            className="w-full text-ellipsis text-xs outline-none ring-0 focus:ring-0"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <IconChevronDown className="h-auto w-4" />
          <small className="text-xs">Jobs</small>
        </div>
      </section>

      <div className="flex items-center justify-center gap-[2vw]">
        <p className="flex items-center justify-center gap-1">
          About <IconChevronDown className="h-auto w-4" />
        </p>
        <p>Contact</p>
      </div>

      <div className="flex items-center justify-center gap-[2vw]">
        <Link href="/login">Log In</Link>
        <PrimaryButton textContent="Sign Up" to="/signup" />
      </div>
    </motion.nav>
  );
}
