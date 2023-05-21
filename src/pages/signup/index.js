import React, { useState, useEffect } from 'react';
import Footer from '@/components/layout/footer';
import NavbarLogo from '@/components/layout/navbar-logo';
import Link from 'next/link';

import {
  IconBriefcase,
  IconUserSearch,
  IconChevronRight
} from '@tabler/icons-react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';

const Signup = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    console.log('Active Button:', activeButton);
  }, [activeButton]);

  return (
    <>
      <NavbarLogo />
      <main className="flex h-fit flex-col items-center p-10 text-xs text-gray-700">
        <section className="flex flex-col items-center">
          <h1 className="mb-10 text-3xl font-bold text-gray-800">Join as?</h1>
          {/* Cards */}
          <div className="flex gap-6">
            {/* Card */}
            <button
              className={`w-72 rounded-xl p-8 text-left shadow-lg outline outline-2 ${
                activeButton === 'worker'
                  ? 'outline-brand-500'
                  : 'outline-gray-200'
              }`}
              onClick={() => handleClick('worker')}
            >
              <div className="flex items-start justify-between">
                <IconBriefcase size={32} />
                <input
                  type="checkbox"
                  checked={activeButton === 'worker' ? true : false}
                />
              </div>
              <h1 className="mb-2 mt-4 w-52 text-xl font-bold">
                I’m a <span className="text-brand-500">worker</span>, finding a
                job
              </h1>
              <p>
                Seeking job opportunities from inclusive and accommodating
                employers.
              </p>
            </button>
            <button
              className={`w-72 rounded-xl p-8 text-left shadow-lg outline outline-2 ${
                activeButton === 'employer'
                  ? 'outline-brand-500'
                  : 'outline-gray-200'
              }`}
              onClick={() => handleClick('employer')}
            >
              <div className="flex items-start justify-between">
                <IconUserSearch size={32} />
                <input
                  type="checkbox"
                  checked={activeButton === 'employer' ? true : false}
                />
              </div>
              <h1 className="mb-2 mt-4 w-52 text-xl font-bold">
                I’m a <span className="text-brand-500">employer</span>, hiring
                workers
              </h1>
              <p>
                A company or individual creating job opportunities tailored to
                neurodiverse individuals.
              </p>
            </button>
          </div>
          <PrimaryButton
            textContent="Next"
            className="mt-10 h-12 w-60 rounded-lg"
            buttonIconRight={<IconChevronRight size={16} />}
          />
          <Link className="mt-4 font-medium underline" href="/login">
            Already have an account?{' '}
            <span className="cursor-pointer font-bold text-brand-500">
              Log In
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
