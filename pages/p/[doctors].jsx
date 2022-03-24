import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { firebaseApp } from "../../firebase/clientApp";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import psychs from "../../content/psych";

import {
  BsLinkedin,
  BsMailbox,
  BsFillPenFill,
  BsFillCheckCircleFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";

const Doctors = () => {
  const auth = getAuth(firebaseApp);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const username = router.query.doctors;

  const [psychologist, setPsychologist] = useState(null);

  useEffect(() => {
    if (user && !loading) {
      console.log("user", user);
    } else if (loading) {
    } else {
      router.push("/");
    }
  }, [user]);

  useEffect(() => {
    psychs.phychs.filter((psychologist) => {
      if (psychologist.username === username) {
        setPsychologist(psychologist);
      }
    });
  }, [router]);

  console.log(psychologist);

  if (!psychologist) {
    return (
      <div className="mt-20 min-h-screen bg-teal-900 text-white font-semibold p-2 flex items-center justify-center">
        Loading
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{psychologist.name}</title>
        <description>{psychologist.description}</description>
      </Head>
      {psychologist && (
        <div className="mt-20 min-h-screen mx-auto p-2">
          <div className="flex flex-col md:flex-row justify-center items-center md:max-w-7xl md:mx-auto md:space-x-5">
            <div className="w-full mx-auto flex flex-col justify-center items-center md:mt-10">
              <div className="relative h-96 bg-teal-900 p-3 text-white rounded-2xl w-11/12 md:w-80  flex flex-col justify-center items-center ">
                <img
                  src={psychologist.avatar}
                  alt={`profile image for phychologist ${psychologist.name} on the humble india platform`}
                />
                <h1 className="text-3xl font-semibold">{psychologist.name}</h1>
                <h1 className="text-center font-semibold">
                  {psychologist.degree}, {psychologist.school}
                </h1>
                <div className=" w-3/5 flex justify-between items-center mb-3 absolute bottom-0">
                  <BsLinkedin fontSize={20} />
                  <MdCall fontSize={20} />
                  <GrMail fontSize={20} />
                </div>
              </div>
              <Link href={`tel:${psychologist.whatsapp}`} passHref>
                <button className="flex justify-center items-center mt-3 shadow shadow-teal-600 w-60 py-1 bg-teal-900 rounded-lg text-white">
                  <span className="font-semibold text-2xl ">Book Session</span>{" "}
                  <FiPhoneCall fontSize={20} className="ml-2" />{" "}
                </button>
              </Link>
            </div>
            <div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-7 ">
                <div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-white bg-teal-900 w-12 flex items-center justify-center h-12 p-1 rounded-full">
                      <BsFillPenFill fontSize={20} />
                    </div>
                    <h2 className="text-2xl font-semibold uppercase">
                      Qualification
                    </h2>
                  </div>
                  <p className="text-xl ml-2 md:ml-3 text-justify md:px-3">
                    {psychologist.degree}, {psychologist.school}{" "}
                    {psychologist.year}{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-white bg-teal-900 w-12 flex items-center justify-center h-12 p-1 rounded-full">
                      <FaLanguage fontSize={20} />
                    </div>
                    <h2 className="text-2xl font-semibold uppercase">
                      Languages Spoken
                    </h2>
                  </div>
                  <p className="gap-2">
                    {psychologist.language.map((e,index) => (
                      <span key={index} className="text-xl ml-2 md:ml-3 text-justify md:px-3">
                        {e}{" "}
                      </span>
                    ))}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-white bg-teal-900 w-12 flex items-center justify-center h-12 p-1 rounded-full">
                      <BsFillCheckCircleFill fontSize={20} />
                    </div>
                    <h2 className="text-2xl font-semibold uppercase">
                      Specialisation
                    </h2>
                  </div>
                  <p className="text-xl ml-2 md:ml-3 text-justify md:px-3">
                    {psychologist.specialisation}
                  </p>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-white bg-teal-900 w-12 flex items-center justify-center h-12 p-1 rounded-full">
                      <BsFillPersonCheckFill fontSize={20} />
                    </div>
                    <h2 className="text-2xl font-semibold uppercase">
                      Expertise
                    </h2>
                  </div>
                  <p className="text-xl ml-2 md:ml-3 text-justify md:px-3">
                    {psychologist.expertise}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-7xl md:mx-auto ">
            <div className="mt-8 ">
              <h2 className="text-3xl font-bold text-center border-b-2 uppercase border-teal-900">
                About {psychologist.name}
              </h2>
              <div className="md:max-w-7xl md:mx-auto  md:px-5">
                <p className="text-xl ml-2 italic text-center text-teal-900">
                  {psychologist.description}
                </p>
              </div>
              <p className="text-xl text-justify ml-2 mt-2 md:px-5">
                {psychologist.serviceDescription}
              </p>
            </div>
          </div>

          <div className="md:max-w-7xl md:mx-auto ">
            <div className="mt-8 ">
              <h2 className="text-3xl font-bold text-center border-b-2 uppercase border-teal-900">
                My CLients Says About Me
              </h2>
              <Testimonial psychologist={psychologist} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Doctors;

const Testimonial = ({ psychologist }) => {
  return (
    <section className="mb-20 text-gray-700">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
        <div className="mb-12 md:mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
              className="rounded-full shadow-lg w-32"
            />
          </div>
          <h5 className="text-xl font-semibold mb-4">Denzil D</h5>
          <h6 className="font-semibold text-blue-600 mb-4">Web Developer</h6>
          <p className="mb-4">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            Her demeanour is so comforting, she instantly puts you at ease and
            makes you feel safe. The coping mechanisms that she taught me have
            made a remarkable difference in my life
          </p>
          <ul className="flex justify-center mb-0">
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star-half-alt"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 536 512"
              >
                <path
                  fill="currentColor"
                  d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
              className="rounded-full shadow-lg w-32"
            />
          </div>
          <h5 className="text-xl font-semibold mb-4">Sana</h5>
          <h6 className="font-semibold text-blue-600 mb-4">Graphic Designer</h6>
          <p className="mb-4">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            I have personally lost the count of people I have referred to{" "}
            {psychologist.name}. She was my 7th therapist, I was highly
            sceptical when I started working with her. One session changed my
            view of therapy. I am in a much better place today thanks to her.
          </p>
          <ul className="flex justify-center mb-0">
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
              className="rounded-full shadow-lg w-32"
            />
          </div>
          <h5 className="text-xl font-semibold mb-4">Rohit Yadav</h5>
          <h6 className="font-semibold text-blue-600 mb-4">
            Marketing Specialist
          </h6>
          <p className="mb-4">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            I was on the lowest emotional low when I got connected to{" "}
            {psychologist.name}. She correctly diagnosed my clinical depression,
            taught me coping mechanisms & asked me to consult a psychiatrist for
            medication. Within a span of 21 days & 3 sessions, I felt like I got
            my groove back.
          </p>
          <ul className="flex justify-center mb-0">
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
