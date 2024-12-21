import Link from "next/link";

export default function Testimonials() {
    return (
      <div>
        <section aria-labelledby="sale-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Unlock Your Interview Potential!</h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">Access curated coding interview questions, expert solutions, and resources designed to help you land your dream tech job. Don't wait—start your preparation today!</p>
          <Link href="/category" className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">Explore Questions Now</Link>
        </div>
      </section>
        <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

      <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">{'KeCodify is a game-changer! The structured questions helped me crack my dream job at a top tech company. Highly recommend it to anyone preparing for interviews!'}</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Shehab , Egypt</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">I was struggling with interview prep until I found KeCodify. The detailed answers and explanations made complex topics so much easier to understand</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Najib, UAE</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">This platform has everything you need to succeed. From beginner to advanced topics, KeCodify is the ultimate resource for tech interviews.</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Yousef, Egypt</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </section>
      </div>
    )
}