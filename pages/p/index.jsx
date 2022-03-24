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

const MainPage = () => {
  const psychologistsData = [
    {
      username: "@mehak",
      name: "Ms Mehak Bhandari",
      title: "Mental Health Facilitator",
      avatar:
        "https://res.cloudinary.com/dywkbcfp5/image/upload/w_200,h_200,c_thumb,g_face,f_auto,r_max,bo_2px_solid_white/v1622023412/ltzgyhkx2jc5ov9omzeq.png",
      description:
        "I focus on a solution-oriented approach to help individuals overcome their circumstances and realise their true potential to lead a healthy and fulfilling life.",
      available: true,
      price: 2000,
      sessionDuration: 30,
      rating: 4.5,
      verified: true,
      serviceDescription: `
        I work with clients to help them identify patterns in their behavior which cause problems, put them in a perspective and then facilitate unlearning them.
    
        By engaging with you, by attempting to enlighten that sensitive part of your personality that you have suppressed, I can make you conscious of what it will take for you to be happy. You cannot change the world but that one small change that you bring about in your attitude can sometimes help change your entire life.
        
        My goal is to empower you to choose how to respond to your environment judiciously instead of being a victim to it. `,
      education: [
        {
          degree: "B.Sc. Psychology",
          school: "University of Delhi",
          place: "Delhi",
          year: "2012",
        },
      ],
      places: ["Mumbai", "Delhi", "Bangalore"],
      whatsapp: "+919915556777",
      appointmentLink: "https://calendly.com/goyalaarush92/30min",
    },
    {
      username: "@payal",
      name: "Ms Payal Saxena",
      title: "Mental Health Facilitator",
      avatar:
        "https://res.cloudinary.com/dywkbcfp5/image/upload/w_200,h_200,c_thumb,g_face,f_auto,r_max,bo_2px_solid_white/v1635315509/huiy6l1t7lzwntqyuw2p.png",
      description:
        "I focus on a solution-oriented approach to help individuals overcome their circumstances and realise their true potential to lead a healthy and fulfilling life.",
      available: true,
      price: 2000,
      sessionDuration: 30,
      rating: 4.5,
      verified: true,
      serviceDescription: `
        I work with clients to help them identify patterns in their behavior which cause problems, put them in a perspective and then facilitate unlearning them.
    
        By engaging with you, by attempting to enlighten that sensitive part of your personality that you have suppressed, I can make you conscious of what it will take for you to be happy. You cannot change the world but that one small change that you bring about in your attitude can sometimes help change your entire life.
        
        My goal is to empower you to choose how to respond to your environment judiciously instead of being a victim to it. `,
      education: [
        {
          degree: "B.Sc. Psychology",
          school: "University of Delhi",
          place: "Delhi",
          year: "2012",
        },
      ],
      places: ["Mumbai", "Delhi", "Bangalore"],
      whatsapp: "+91 8779662139",
      appointmentLink: "https://calendly.com/goyalaarush92/30min",
    },
    {
      username: "@parul",
      name: "Ms Parul Arora",
      title: "Mental Health Facilitator",
      avatar:
        "https://res.cloudinary.com/dywkbcfp5/image/upload/w_200,h_200,c_thumb,g_face,r_max,bo_2px_solid_white,f_auto/v1646408215/oqlhixfgaaufpiytqimv.png",
      description:
        "I focus on a solution-oriented approach to help individuals overcome their circumstances and realise their true potential to lead a healthy and fulfilling life.",
      available: true,
      price: 2000,
      sessionDuration: 30,
      rating: 4.5,
      verified: true,
      serviceDescription: `
        I work with clients to help them identify patterns in their behavior which cause problems, put them in a perspective and then facilitate unlearning them.
    
        By engaging with you, by attempting to enlighten that sensitive part of your personality that you have suppressed, I can make you conscious of what it will take for you to be happy. You cannot change the world but that one small change that you bring about in your attitude can sometimes help change your entire life.
        
        My goal is to empower you to choose how to respond to your environment judiciously instead of being a victim to it. `,
      education: [
        {
          degree: "B.Sc. Psychology",
          school: "University of Delhi",
          place: "Delhi",
          year: "2012",
        },
      ],
      places: ["Mumbai", "Delhi", "Bangalore"],
      whatsapp: "+91 8779662139",
      appointmentLink: "https://calendly.com/goyalaarush92/30min",
    },
    {
      username: "@chandana",
      name: "Ms Chandana Bhatt",
      title: "Mental Health Facilitator",
      avatar:
        "https://res.cloudinary.com/dywkbcfp5/image/upload/w_200,h_200,c_thumb,g_face,r_max,bo_2px_solid_white,f_auto/v1645093337/cbctthhvchikck3lsxim.png",
      description:
        "I focus on a solution-oriented approach to help individuals overcome their circumstances and realise their true potential to lead a healthy and fulfilling life.",
      available: true,
      price: 2000,
      sessionDuration: 30,
      rating: 4.5,
      verified: true,
      serviceDescription: `
        I work with clients to help them identify patterns in their behavior which cause problems, put them in a perspective and then facilitate unlearning them.
    
        By engaging with you, by attempting to enlighten that sensitive part of your personality that you have suppressed, I can make you conscious of what it will take for you to be happy. You cannot change the world but that one small change that you bring about in your attitude can sometimes help change your entire life.
        
        My goal is to empower you to choose how to respond to your environment judiciously instead of being a victim to it. `,
      education: [
        {
          degree: "B.Sc. Psychology",
          school: "University of Delhi",
          place: "Delhi",
          year: "2012",
        },
      ],
      places: ["Mumbai", "Delhi", "Bangalore"],
      whatsapp: "+91 8779662139",
      appointmentLink: "https://calendly.com/goyalaarush92/30min",
    },
  ];

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
            <div class="flex justify-center mt-3">
              <div class="mb-3 w-5/6 md:w-96">
                <input
                  type="text"
                  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder=" Search by Name or Location "
                />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-3 px-2">
            {psychologistsData.map((items, index) => (
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
