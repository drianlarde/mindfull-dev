import React from 'react';
import PrimaryButton from '@/components/atoms/buttons/primary-button';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary-500 flex flex-col justify-between w-full h-fit p-20 mt-10 text-center rounded-t-3xl text-gray-0 text-xs gap-[5vw]">
      <div className="w-full flex items-start justify-between">
        <div className="text-left">
          <h1 className="font-bold text-2xl">Sign up to our newsletter</h1>
          <p>Stay up-to-date with our newsletter</p>
        </div>
        <section className="w-96 flex items-center justify-between gap-4 p-2 pl-4 outline outline-1 outline-white rounded-full">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full text-xs text-ellipsis outline-none ring-0 focus:ring-0 bg-secondary-500"
            />
            <PrimaryButton textContent="Subscribe" />
          </div>
        </section>
      </div>
      <div className="w-full flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/brand/footer-logo.svg"
              width={30}
              height={30}
              alt="Footer Logo"
            />
            <h1 className="font-bold text-gray-0 text-xl">mindFull</h1>
          </div>
          <p className="text-left mt-4 w-60">
            Unlock the power of diversity and inclusion in your workforce
          </p>
        </div>
        <div className="flex gap-[5vw] text-left">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold mb-4">About</h1>
            <a href="#">Why Us</a>
            <a href="#">Features</a>
            <a href="#">Browse Jobs</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold mb-4">Company</h1>
            <a href="#">Matrix Co.</a>
            <a href="#">Stores</a>
            <a href="#">Testimonials</a>
            <a href="#">Blogs</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold mb-4">Resources</h1>
            <a href="#">Support</a>
            <a href="#">Community</a>
            <a href="#">Reviews</a>
            <a href="#">Success Stories</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold mb-4">Any Questions?</h1>
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
