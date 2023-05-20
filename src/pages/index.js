import PrimaryButton from '@/components/atoms/button/primary-button';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-gray-700 text-xs">
      {/* Nav */}
      <nav className="fixed bg-gray-0 w-full flex items-center justify-between gap-2 py-4 px-12">
        <h1 className="font-bold text-brand-500 text-xl">mindFull</h1>

        {/* Search Bar */}
        <section className="w-96 flex items-center justify-between gap-4 px-4 py-2 outline outline-1 outline-stroke-dark rounded-full">
          <div className="flex gap-2">
            <IconSearch className="w-4 h-auto" />
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

        <div className="flex items-center justify-center gap-10">
          <p className="flex items-center justify-center gap-1">
            About <IconChevronDown className="w-4 h-auto" />
          </p>
          <p>Contact</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button>Log In</button>
          <PrimaryButton textContent="Sign Up" />
        </div>
      </nav>

      {/* Hero */}
      <section className="flex items-center justify-center w-full px-12 py-10 gap-10 mt-16">
        <div>
          <h1 className="w-96 font-bold text-3xl">
            Unlock your potential and
            <span className="text-brand-500"> find future</span>
          </h1>
          <p className="w-60 mt-2">
            Unlock the power of diversity and inclusion in your workforce
          </p>
          <PrimaryButton textContent="Get Started" className="mt-4" />
        </div>
        <Image
          src="/images/mindfull-illustration-hero.png"
          width={500}
          height={500}
          alt="Mindfull Ilustration"
          className=" w-[30vw] "
        />
      </section>

      {/* Partners */}
      <section className="flex flex-col items-center justify-center w-full px-12 py-5">
        <h1 className="text-lg text-gray-500 font-semibold">Trusted By</h1>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/partners/prosple.png"
            width={200}
            height={200}
            alt="Prosple"
          />
          <Image
            src="/images/partners/kadakareer.png"
            width={200}
            height={200}
            alt="Prosple"
          />
        </div>
      </section>

      {/* Feature: Browse */}
      <section className="flex items-center justify-center w-full px-12 py-5 gap-10">
        <div>
          <h1 className="w-96 font-bold text-3xl text-left">
            Browse
            <span className="text-brand-500"> Recommended Jobs</span> Made For
            You
          </h1>
          <p className="w-64 mt-2">
            Our platform helps you find jobs that match your strengths and
            abilities.
          </p>
        </div>

        <Image
          src="/features/browse-feature.svg"
          width={500}
          height={500}
          alt="Browsing Feature"
          className="w-1/2"
        />
      </section>

      {/* Feature: Job Opportunities */}
      <section className="flex flex-col items-center justify-center w-full px-12 py-5 text-center">
        <h1 className="w-96 font-bold text-3xl mt-2">
          Create
          <span className="text-brand-500"> Job Opportunities</span>
        </h1>
        <p className="w-80 mt-4">
          Employers can create job postings that are inclusive and
          accommodating, leading to mutual benefits.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Design & Creative
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Development
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Ghostwriting
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Technology
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Marketing
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Bookkeeping
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Freelance
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Copywriting
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Project Manager
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Engineering
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Legal
            </div>
            <div className="text-gray-500 outline outline-1 outline-gray-300 px-4 py-2 rounded-lg">
              Data Entry
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-500 flex flex-col justify-between w-full h-fit px-12 py-10 mt-10 text-center rounded-t-3xl text-gray-0 gap-[5vw]">
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
    </main>
  );
}
