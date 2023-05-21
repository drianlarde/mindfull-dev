import React from 'react';
import NavbarLogo from '@/components/layout/navbar-logo';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryInput from '@/components/atoms/inputs/primary-input';
import { IconUser, IconLock } from '@tabler/icons-react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';

const Login = () => {
  return (
    <>
      <NavbarLogo />
      <main className="relative flex h-fit flex-col items-center p-10 text-xs text-gray-700">
        <section className="flex justify-between">
          <Image
            src="/images/mindfull-illustration-login.png"
            alt="Mindfull Illustration"
            width={400}
            height={400}
            className="absolute left-0 z-[-1] h-auto w-full min-w-[25em] max-w-[50em] overflow-hidden object-cover"
          />
          <div className="rounded-2xl bg-gray-0 px-20 py-16 shadow-lg outline outline-2 outline-gray-300">
            <h1 className="text-4xl font-semibold">
              Log In to <span className="text-brand-500">mindFull</span>
            </h1>
            <p className="mt-2 w-96 text-lg font-medium leading-tight text-gray-500">
              Unlock the power of diversity and inclusion in your workforce
            </p>
            <PrimaryInput
              type="text"
              placeholder="Email"
              icon={<IconUser size={20} />}
            />
            <PrimaryInput
              type="password"
              placeholder="Password"
              icon={<IconLock size={20} />}
            />
            <div className="mt-4 flex justify-between">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox_id"
                  value="value"
                />
                <label for="checkbox_id">Remember me</label>
              </div>
              <Link href="/forgot-password" className="underline">
                Forgot password
              </Link>
            </div>
            <PrimaryButton
              textContent="Log In"
              className="mt-10 w-full rounded-lg py-4"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
