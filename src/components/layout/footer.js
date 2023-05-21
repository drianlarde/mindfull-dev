import React from 'react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-10 flex h-fit w-full flex-col justify-between gap-[5vw] rounded-t-3xl bg-secondary-500 p-20 text-center text-xs text-gray-0">
      <div className="flex w-full items-start justify-between">
        <div className="text-left">
          <h1 className="text-2xl font-bold">Sign up to our newsletter</h1>
          <p>Stay up-to-date with our newsletter</p>
        </div>
        <section className="outline-white flex w-96 items-center justify-between gap-4 rounded-full p-2 pl-4 outline outline-1">
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full text-ellipsis bg-secondary-500 text-xs outline-none ring-0 focus:ring-0"
            />
            <PrimaryButton textContent="Subscribe" />
          </div>
        </section>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/brand/footer-logo.svg"
              width={30}
              height={30}
              alt="Footer Logo"
            />
            <h1 className="text-xl font-bold text-gray-0">mindFull</h1>
          </div>
          <p className="mt-4 w-60 text-left">
            Unlock the power of diversity and inclusion in your workforce
          </p>
        </div>
        <div className="flex gap-[5vw] text-left">
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 font-semibold">About</h1>
            <a href="#">Why Us</a>
            <a href="#">Features</a>
            <a href="#">Browse Jobs</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 font-semibold">Company</h1>
            <a href="#">Matrix Co.</a>
            <a href="#">Stores</a>
            <a href="#">Testimonials</a>
            <a href="#">Blogs</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 font-semibold">Resources</h1>
            <a href="#">Support</a>
            <a href="#">Community</a>
            <a href="#">Reviews</a>
            <a href="#">Success Stories</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="mb-4 font-semibold">Any Questions?</h1>
            {/* Email */}
            <a
              href="mailto:m.desk@mindfull.com"
              className="flex items-center gap-2"
            >
              m.desk@mindfull.com
            </a>
            <small>Feel free to ask anything regarding our service</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
