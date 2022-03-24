import React from "react";
import Head from "next/head";
import { firebaseApp } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useState } from "react/cjs/react.production.min";
import PhycologistCard from "../../components/PhycologistCard";
import { Fade, Zoom } from "react-reveal";

import psychs from "../../content/psych";

const MainPage = () => {
  
  const auth = getAuth(firebaseApp);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      console.log("user", user);
    } else if (loading) {
    } else {
      router.push("/");
    }
  }, [user]);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    router.push("/");
    return <div></div>;
  }

  if (user) {
    return (
      <>
        <Head>
          <title>Psychologist</title>
        </Head>
        <section className="bg-teal-900 text-white min-h-screen p-1">
          <div className="max-w-6xl mx-auto">
            <Fade left>
              <div className="mt-20">
                Hello,{" "}
                <span className="text-2xl italic">
                  {user.displayName.split(" ")[0]}!
                </span>
              </div>
            </Fade>
            <Fade>
              <p className="ml-4 text-center mt-2">
                Get the direct contact of Best Psychologist in India in one
                click. These bunch of people are best in their job and will help
                you to resolve your problems.
              </p>
            </Fade>
          </div>
          <div>
            <div className="flex justify-center mt-3">
              <div className="mb-3 w-5/6 md:w-96">
                <input
                  type="text"
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=" Search by Name or Location "
                />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-3 px-2">
            {psychs.phychs.map((items, index) => (
              <div key={index}>
                <PhycologistCard psych={items} />
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
};

export default MainPage;
