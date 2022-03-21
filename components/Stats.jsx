import React from "react";

const Stats = () => {
  return (
    <section className="bg-teal-900 text-white font-nunito  flex justify-center items-center">
      <div className="container px-5 py-10 max-w-7xl mx-auto md:min-h-screen">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4   rounded-br-lg rounded-tl-lg">
            Why to join us?
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify first-letter:text-indigo-700 first-letter:text-2xl first-letter:font-extrabold capitalize">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full group ">
            <div className="border-2 border-teal-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
              <svg
                className="text-teal-900 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                150+
              </h2>
              <p className="leading-relaxed text-indigo-700 font-semibold">Psychologist</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
            <div className="border-2 border-teal-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
              <svg
                className="text-teal-900 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2000+
              </h2>
              <p className="leading-relaxed text-indigo-700 font-semibold">Appointments Done!</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
            <div className="border-2 border-teal-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
              <svg
                className="text-teal-900 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2-6
              </h2>
              <p className="leading-relaxed text-indigo-700 font-semibold">Flexible Hours</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full group">
            <div className="border-2 border-teal-400 shadow-lg px-4 py-6 rounded-br-3xl rounded-tl-3xl bg-white">
              <svg
                className="text-teal-900 w-12 h-12 mb-3 inline-block transform group-hover:scale-125 transition duration-500 ease-in-out"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                Everything
              </h2>
              <p className="leading-relaxed text-indigo-700 font-semibold">is Secret</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
