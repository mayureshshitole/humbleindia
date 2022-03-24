import React from "react";

const Feature = () => {
  return (
    <section className=" bg-teal-900 pt-8">
      <div className="max-w-7xl mx-auto container">
        <div className="flex items-center flex-col px-4">
          <p className="uppercase text-lg text-center text-white leading-normal">
            in few easy steps
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight text-white lg:w-7/12 md:w-9/12 pt-4">
            Find the solution to your problems &amp; live stress free
          </h2>
        </div>
        <div className="mt-20 flex flex-wrap justify-between px-4">
          <div className="flex sm:w-full md:w-5/12 pb-20">
            <div className="w-20 h-20 relative mr-5">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </div>
            </div>
            <div className="w-10/12">
              <h4 className="text-lg font-bold leading-tight text-white">
                Comunity and COntent related to Your Mental Health
              </h4>
              <p className="text-base text-white leading-normal pt-2">
                A good community helping each other with bunch of related
                content provided by us.
              </p>
            </div>
          </div>
          <div className="flex sm:w-full md:w-5/12 pb-20">
            <div className="w-20 h-20 relative mr-5">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
            </div>
            <div className="w-10/12">
              <h4 className="text-lg font-bold leading-tight text-white">
                Qualified Preofessionals
              </h4>
              <p className="text-base text-white leading-normal pt-2">
                We have the best professionals - licensed and verified, who can
                help you heal!
              </p>
            </div>
          </div>
          <div className="flex sm:w-full md:w-5/12 pb-20">
            <div className="w-20 h-20 relative mr-5">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
              </div>
            </div>
            <div className="w-10/12">
              <h4 className="text-lg font-bold leading-tight text-white">
                For us, Privacy is the King
              </h4>
              <p className="text-base text-white leading-normal pt-2">
                Secure and private discussions your psychologist and no tracking
                of your private talks.
              </p>
            </div>
          </div>
          <div className="flex sm:w-full md:w-5/12 pb-20">
            <div className="w-20 h-20 relative mr-5">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
              <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={12} rx={1} />
                  <line x1={7} y1={20} x2={17} y2={20} />
                  <line x1={9} y1={16} x2={9} y2={20} />
                  <line x1={15} y1={16} x2={15} y2={20} />
                </svg>
              </div>
            </div>
            <div className="w-10/12">
              <h4 className="text-lg font-bold leading-tight text-white">
                Online, Anywhere and Everywhere
              </h4>
              <p className="text-base text-white leading-normal pt-2">
                Choose your free time to consult, get call from our experts as
                per your time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
