import React from "react";
import Image from "next/image";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase/clientApp";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import CtaHeader from "./Ctaheader";
import BlogSection from "./BlogSection";
import Stats from "./Stats";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

const Hero = () => {
  const router = useRouter();

  const fireBaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const [user, loading, error] = useAuthState(fireBaseAuth);

  const authUser = async () => {
    if (!user) {
      const { user } = await signInWithPopup(fireBaseAuth, provider);
      const { refreshToken, providerData } = user;
      console.log(user);

      localStorage.setItem("user", JSON.stringify(providerData));
      localStorage.setItem("accessToken", JSON.stringify(refreshToken));

      router.push("/p");
    } else {
      router.push("/p");
    }
  };

  return (
    <>
      <div className="min-h-screen py-10 px-[1.5px] md:p-5 mt-16 md:mt-16 bg-teal-900 text-white flex flex-col-reverse md:flex-row justify-between items-center ">
        <Fade left>
          <div className="flex flex-col justify-center items-center md:max-w-4xl  mx-auto">
            <h1 className="text-3xl ml-1 md:text-5xl font font-semibold text-center md:text-left tracking-wide capitalize">
              Rejuvenate{" "}
              <span className="font-extrabold text-transparent stroke-slate-50 bg-clip-text bg-gradient-to-br from-green-400 to-indigo-600">
                Revitalize
              </span>{" "}
              Find Yourself
            </h1>
            <p className="text-center mt-2 md:mt-5 text-lg md:text-2xl md:font-semibold md:px-10">
              From career to relationship counselling, we help you to solve your
              life problems.
            </p>
            <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-5 mt-5 w-4/5 md:w-2/6">
              <button
                onClick={authUser}
                className="bg-gradient-to-br from-green-400 to-indigo-600 hover:bg-gradient-to-tr duration-500  text-white font-bold py-2  shadow-xl rounded min-w-full"
              >
                Get Started
              </button>
              <button
                onClick={authUser}
                className="bg-gradient-to-br from-green-400 to-indigo-600 hover:bg-gradient-to-tr duration-500  text-white font-bold py-2  shadow-xl rounded min-w-full"
              >
                Book a Session
              </button>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="">
            <Image
              src={"/graphics/HumbleBanner.png"}
              width={600}
              height={600}
              layout="intrinsic"
            />
          </div>
        </Fade>
      </div>

      <div className=" flex flex-col gap-y-5 bg-teal-900">
        <section className="text-white body-font bg-teal-900 ">
          <Zoom>
            <div className="container max-w-6xl mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Treat your counseller as your
                  <br className="hidden lg:inline-block" />
                  <span className="italic">BEST FRIEND</span>
                </h1>
                <p className="mb-8 leading-relaxed">
                  Mental health is not a thing we should ignore, its the most
                  important factor in our life which helps us to grow in our
                  career, studied
                </p>
              </div>
              <div className="lg:max- -lg lg:w-full md:w-1/2 w-5/6 rounded-2xl p-2 bg-white">
                <Image
                  src={"/graphics/friend.svg"}
                  width={720}
                  height={600}
                  layout="intrinsic"
                />
              </div>
            </div>
          </Zoom>
        </section>

        <section className="text-white body-font  bg-teal-900">
          <Zoom>
            <div className="container max-w-6xl mx-auto flex px-5  md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-2xl p-2 bg-white">
                <Image
                  src={"/graphics/friend.svg"}
                  width={720}
                  height={600}
                  layout="intrinsic"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  taking counselling does not mean
                  <br className="hidden lg:inline-block" />
                  <span className="italic">You are Ill</span>
                </h1>
                <p className="mb-8 leading-relaxed">
                  People always htinks that talking about personal mental health
                  to anyone will not understand the situation person is
                  suffering through, but this is not the right, if you are
                  taking counselling it means your cares about your brain and
                  heart just like you hit gym to maintain your physic.
                </p>
              </div>
            </div>
          </Zoom>
        </section>
      </div>
      <CtaHeader />
      <Stats />
    </>
  );
};

export default Hero;
