import CyrcleComponent from "../../components/cyrcleComponent";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <span className="w-11/12 mx-auto text-2xl font-bold text-center mt-6">
        About Us
      </span>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[80px] lg:pb-[90px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 px-8">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <CyrcleComponent/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-8 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Prepare for Success with Confidence.
                </h2>
                <p className="mb-5 text-base text-body-color ">
                Navigating interviews can be challenging, but we are here to make it easy. Our platform provides a curated collection of interview questions and answers for various programming languages and topics.
                </p>
                <p className="mb-8 text-base text-body-color">
                Whether you’re a beginner or an experienced professional, our goal is to help you review, practice, and succeed in your next interview.

Stay ahead of the competition and walk into your interview prepared and confident!
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
