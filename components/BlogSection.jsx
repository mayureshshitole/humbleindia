import React from "react";
import { Zoom } from "react-reveal";
function BlogSection() {
  return (
    <div className="py-16 sm:py-24 md:py-44 lg:py-20 px-4 bg-teal-900 text-white -z-10">
      <div>
        <h1 className=" pt-4 xl:pt-0 text-2xl md:text-4xl text-center font-extrabold mb-4">
          Our Blog Posts
        </h1>
        <p className="text-xl text-gray-100 text-center xl:w-3/5 mx-auto w-11/12">
          Don’t focus on having a great blog. Focus on adapting things from a blog that’s
          great for you.” As a community, everything you do flows from
          understanding your Mental Health and seeking to help Yourself.
        </p>
      </div>
      <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around pt-8">
        <Zoom>
          <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm  lg:w-1/2 w-11/12 mx-auto sm:mx-0">
            <div className="shadow h-64 rounded z-10">
              <img
                src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded relative">
              <p className="uppercase text-sm text-teal-900 text-center pb-3">
                Mental Health
              </p>
              <p className="text-lg text-teal-900 text-center pb-3">
                The way I live and handle a any pressure, is an expression of my
                inner feeling.
              </p>
              <p className="text-sm text-teal-900 text-center">
                May 13, 2019 by
                <a href="javascript:void(0)">
                  <span className="text-teal-900 cursor-pointer">
                    {" "}
                    Niharika
                  </span>
                </a>
              </p>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
            <div className="shadow h-64 rounded">
              <img
                src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded relative">
              <p className="uppercase text-sm text-teal-900 text-center pb-3">
                Work
              </p>
              <p className="text-lg text-gray-800 text-center pb-3">
                I am a greater believer in luck, and I find the harder I work
                the more I have of it.
              </p>
              <p className="text-sm text-gray-800 text-center">
                May 13, 2019 by
                <a href="javascript:void(0)">
                  <span className="text-teal-900 cursor-pointer">
                    {" "}
                    Mayuresh
                  </span>
                </a>
              </p>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
            <div className="shadow h-64 rounded">
              <img
                src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded relative">
              <p className="uppercase text-sm text-teal-900 text-center pb-3">
                Productivity
              </p>
              <p className="text-lg text-gray-800 text-center pb-3">
                Productivity is being able to do things that you were never able
                to do before.
              </p>
              <p className="text-sm text-gray-800 text-center">
                May 13, 2022 by
                <a href="javascript:void(0)">
                  <span className="text-teal-900 cursor-pointer"> Arun</span>
                </a>
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default BlogSection;
