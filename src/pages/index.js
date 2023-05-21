import Image from 'next/image';

import PrimaryButton from '@/components/atoms/buttons/primary-button';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center text-gray-700 text-xs px-36">
        {/* Hero */}
        <section className="flex items-center justify-between w-full py-10 gap-10 mt-16">
          <div>
            <h1 className="w-[400px] font-bold text-4xl leading-tight">
              Unlock your potential and
              <span className="text-brand-500"> find future</span>
            </h1>
            <p className="text-lg text-gray-500 w-72 mt-2 font-medium">
              Unlock the power of diversity and inclusion in your workforce
            </p>
            <PrimaryButton
              textContent="Get Started"
              className="mt-4"
              to="/signup"
            />
          </div>
          <Image
            src="/images/mindfull-illustration-hero.png"
            alt="Mindfull Illustration"
            width={400}
            height={400}
            className="object-cover w-full h-auto min-w-[25em] max-w-[50em] overflow-hidden"
          />
        </section>

        {/* Partners */}
        <section className="flex flex-col items-center justify-center w-full px-12 py-5">
          <h1 className="text-lg text-gray-500 font-semibold">Trusted By</h1>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/partners/prosple.png"
              width={400}
              height={400}
              alt="Prosple"
              className="object-cover w-full h-auto min-w-[10em] max-w-[12em] overflow-hidden"
            />
            <Image
              src="/images/partners/kadakareer.png"
              width={200}
              height={200}
              alt="Prosple"
              className="object-cover w-full h-auto min-w-[10em] max-w-[12em] overflow-hidden"
            />
          </div>
        </section>

        {/* Feature: Browse */}
        <section className="flex items-center justify-between w-full py-5 gap-10">
          <div>
            <h1 className="w-96 font-bold text-left text-4xl leading-tight">
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
            alt="Browsing Feature"
            width={400}
            height={400}
            className="object-cover w-full h-auto min-w-[25em] max-w-[50em] overflow-hidden"
          />
        </section>

        {/* Feature: Job Opportunities */}
        <section className="flex flex-col items-center justify-center w-full py-5 text-center">
          <h1 className="w-96 font-bold mt-2 text-4xl leading-tight">
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
      </main>
      <Footer />
    </>
  );
}
