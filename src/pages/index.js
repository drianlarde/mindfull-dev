import Image from 'next/image';

import PrimaryButton from '@/components/atoms/buttons/primary-button';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center px-36 text-xs text-gray-700">
        {/* Hero */}
        <section className="mt-16 flex w-full items-center justify-between gap-10 py-10">
          <div>
            <h1 className="w-[400px] text-4xl font-bold leading-tight">
              Unlock your potential and
              <span className="text-brand-500"> find future</span>
            </h1>
            <p className="mt-2 w-72 text-lg font-medium text-gray-500">
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
            className="h-auto w-full min-w-[25em] max-w-[50em] overflow-hidden object-cover"
          />
        </section>

        {/* Partners */}
        <section className="flex w-full flex-col items-center justify-center px-12 py-5">
          <h1 className="text-lg font-semibold text-gray-500">Trusted By</h1>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/partners/prosple.png"
              width={400}
              height={400}
              alt="Prosple"
              className="h-auto w-full min-w-[10em] max-w-[12em] overflow-hidden object-cover"
            />
            <Image
              src="/images/partners/kadakareer.png"
              width={200}
              height={200}
              alt="Prosple"
              className="h-auto w-full min-w-[10em] max-w-[12em] overflow-hidden object-cover"
            />
          </div>
        </section>

        {/* Feature: Browse */}
        <section className="flex w-full items-center justify-between gap-10 py-5">
          <div>
            <h1 className="w-96 text-left text-4xl font-bold leading-tight">
              Browse
              <span className="text-brand-500"> Recommended Jobs</span> Made For
              You
            </h1>
            <p className="mt-2 w-64">
              Our platform helps you find jobs that match your strengths and
              abilities.
            </p>
          </div>

          <Image
            src="/features/browse-feature.svg"
            alt="Browsing Feature"
            width={400}
            height={400}
            className="h-auto w-full min-w-[25em] max-w-[50em] overflow-hidden object-cover"
          />
        </section>

        {/* Feature: Job Opportunities */}
        <section className="flex w-full flex-col items-center justify-center py-5 text-center">
          <h1 className="mt-2 w-96 text-4xl font-bold leading-tight">
            Create
            <span className="text-brand-500"> Job Opportunities</span>
          </h1>
          <p className="mt-4 w-80">
            Employers can create job postings that are inclusive and
            accommodating, leading to mutual benefits.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Design & Creative
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Development
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Ghostwriting
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Technology
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Marketing
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Bookkeeping
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Freelance
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Copywriting
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Project Manager
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Engineering
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
                Legal
              </div>
              <div className="rounded-lg px-4 py-2 text-gray-500 outline outline-1 outline-gray-300">
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
