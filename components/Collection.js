import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <section>
      <div className="mx-auto  lg:w-10/12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-gray-500">
          Explore a comprehensive collection of interview questions and answers across various programming languages and categories. Prepare confidently and ace your next interview!
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link href={"/category/next-js"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="/assets/collection-02.webp"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"Next.js Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  See Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/category/react"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="/assets/collection-03.svg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"React.js Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                See Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link href={"/category/javascript"} className="group relative block">
              <Image
                height={300}
                width={500}
                src="/assets/collection-01.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {"Javascript Collection"}
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  See Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
