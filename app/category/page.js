import Image from "next/image";
import Link from "next/link";
import { categories } from "../constant/constant";

const page = () => {

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {categories?.map((category) => (
          <li key={category.name}>
            <Link
              href={`/category/${category.link}`}
              className="group relative block"
            >
              <Image
                height={300}
                width={300}
                src={category.image}
                alt="category"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-md"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {category.name}
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  See Now
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
