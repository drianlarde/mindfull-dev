import React from 'react';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';

import {
  IconBriefcase,
  IconUserSearch,
  IconChevronRight
} from '@tabler/icons-react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';

const Signup = () => {
  return (
    <>
      <main className="flex h-fit flex-col items-center text-gray-700 text-xs p-10">
        <nav className="w-full">
          <Link href="/">
            <Image
              src="/brand/logo-icon-text.svg"
              alt="Logo Icon Text"
              width={150}
              height={150}
            />
          </Link>
        </nav>
        <section className="flex flex-col items-center mt-10">
          <h1 className="text-gray-800 text-3xl font-bold mb-10">Join as?</h1>
          {/* Cards */}
          <div className="flex gap-6">
            {/* Card */}
            <div className="outline outline-2 outline-gray-200 p-8 rounded-xl w-72 shadow-lg">
              <div className="flex items-start justify-between">
                <IconBriefcase size={32} />
                <input type="checkbox" />
              </div>
              <h1 className="font-bold text-xl w-52 mb-2 mt-4">
                I’m a <span className="text-brand-500">worker</span>, finding a
                job
              </h1>
              <p>
                Seeking job opportunities from inclusive and accommodating
                employers.
              </p>
            </div>
            <div className="outline outline-2 outline-gray-200 p-8 rounded-xl w-72 shadow-lg">
              <div className="flex items-start justify-between">
                <IconUserSearch size={32} />
                <input type="checkbox" />
              </div>
              <h1 className="font-bold text-xl w-52 mb-2 mt-4">
                I’m a <span className="text-brand-500">employer</span>, hiring
                workers
              </h1>
              <p>
                A company or individual creating job opportunities tailored to
                neurodiverse individuals.
              </p>
            </div>
          </div>
          <PrimaryButton
            textContent="Next"
            className="w-60 h-12 rounded-lg mt-10"
            buttonIconRight={<IconChevronRight size={16} />}
          />
          <a className="mt-4 font-medium underline">
            Already have an account?{' '}
            <span className="text-brand-500 font-bold cursor-pointer">
              Log In
            </span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
