import React from 'react';

import NavbarLogo from '@/components/layout/navbar-logo';
import Footer from '@/components/layout/footer';
import PrimaryCard from '@/components/atoms/card/primary-card';
import PrimaryInput from '@/components/atoms/inputs/primary-input';
import PrimaryButton from '@/components/atoms/buttons/primary-button';
import { IconChevronRight } from '@tabler/icons-react';

const EmployerSignup = () => {
  return (
    <>
      <NavbarLogo />
      <main className="relative flex h-fit flex-col items-center px-10 text-xs text-gray-700">
        <PrimaryCard>
          <h1 className="text-4xl font-semibold">
            Sign Up as <span className="text-brand-500">Employer</span>
          </h1>
          <p className="mb-6 mt-2 text-gray-500">
            Please fill out all necessary information
          </p>

          <PrimaryInput
            type="text"
            placeholder="Wayne Tech"
            label="Employer Name"
          />
          <PrimaryInput
            type="email"
            placeholder="juan.delacruz@hotmail.com"
            label="Company Email"
          />
          <PrimaryInput
            type="email"
            placeholder="juan.delacruz@hotmail.com"
            label="Work Email"
          />
          <PrimaryInput
            type="email"
            placeholder="juan.delacruz@hotmail.com"
            label="Confirm Work Email"
          />
          <PrimaryInput
            type="text"
            placeholder="Juan Dela Cruz"
            label="Full Name"
          />
          <PrimaryInput
            type="password"
            placeholder="8+ Characters"
            label="Password"
          />
          <PrimaryInput
            type="password"
            placeholder="Retype password"
            label="Confirm Password"
          />

          <div className="mt-4 flex items-center justify-center gap-2">
            <input
              type="checkbox"
              name="checkbox"
              id="i_understand"
              value="value"
            />
            <label htmlFor="i_understand">
              I understand that this is a platform for neurodivergents
            </label>
          </div>

          <PrimaryButton
            textContent="Next"
            className="mt-10 h-12 w-full rounded-lg"
            buttonIconRight={<IconChevronRight size={16} />}
          />
        </PrimaryCard>
      </main>
      <Footer />
    </>
  );
};

export default EmployerSignup;
