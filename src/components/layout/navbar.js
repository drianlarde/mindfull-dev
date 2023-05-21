import React from 'react';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';

export default function Navbar() {
  return (
    <nav className="fixed bg-gray-0 w-full flex items-center justify-between gap-[4vw] py-4 px-20 text-xs">
      <h1 className="font-bold text-brand-500 text-xl">mindFull</h1>

      {/* Search Bar */}
      <section className="w-96 flex items-center justify-between gap-4 px-4 py-2 outline outline-1 outline-stroke-dark rounded-full">
        <div className="flex gap-2 w-full">
          <IconSearch className="min-w-[1em] w-4 h-auto" />
          <input
            type="text"
            placeholder="Search Jobs"
            className="w-full text-xs text-ellipsis outline-none ring-0 focus:ring-0"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <IconChevronDown className="w-4 h-auto" />
          <small className="text-xs">Jobs</small>
        </div>
      </section>

      <div className="flex items-center justify-center gap-[2vw]">
        <p className="flex items-center justify-center gap-1">
          About <IconChevronDown className="w-4 h-auto" />
        </p>
        <p>Contact</p>
      </div>

      <div className="flex items-center justify-center gap-[2vw]">
        <button>Log In</button>
        <PrimaryButton textContent="Sign Up" to="/signup" />
      </div>
    </nav>
  );
}
