import React from "react";

const CtaHeader = () => {
  return (
    <>
      <div className="  py-12 bg-teal-900 ">
        <div className=" flex justify-center mx-auto md:max-w-7xl ">
          <div className="w-full md:w-full bg-white md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16 rounded-3xl ">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 ">
                  <h1 className="text-lg md:text-3xl  lg:w-10/12 text-teal-900 font-black leading-tight md:text-left text-center ">
                    Counselling Therapy Sessions With Licensed and Verified
                    Experts, English And All Regional Indian Languages, 100%
                    Private and Secure Platform
                  </h1>
                  <button className="mt-5 lg:mt-12 py-3 lg:py-4 px-4 uppercase lg:px-6 bg-teal-900 font-bold text-white rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90">
                    Join the community
                  </button>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mt-8">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

console.log("hello");

export default CtaHeader;
