import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { Zoom } from "react-reveal";
import { useRouter } from "next/router";

const PhycologistCard = ({ psych }) => {
  const router = useRouter();
  return (
    <>
      <Zoom>
        <div className="bg-white text-teal-900 flex flex-col justify-center items-center rounded-xl p-2">
          <Image
            onClick={() => {
              router.push(`/p/${psych.username}`);
            }}
            className="border-2 border-teal-900 "
            src={psych.avatar}
            width={100}
            height={100}
            layout="intrinsic"
            alt={`profile image for phychologist ${psych.name} on the humble india platform`}
          />

          <h1
            onClick={() => {
              router.push(`/p/${psych.username}`);
            }}
            className="text-2xl font-bold border-b-2 border-teal-600 w-full text-center "
          >
            {psych.name}
          </h1>

          <h2
            onClick={() => {
              router.push(`/p/${psych.username}`);
            }}
            className="mt-2 font-medium text-teal-600"
          >
            @{psych.username}
          </h2>

          <p
            onClick={() => {
              router.push(`/p/${psych.username}`);
            }}
            className="text-base text-center"
          >
            {psych.description}
          </p>
          <div className="flex flex-row p-1 gap-2 text-sm mt-2 ">
            {psych.places.map((p, index) => (
              <div
                key={index}
                className="rounded-3xl flex justify-center items-center bg-teal-600 px-2 py-[0.5] text-white"
              >
                {" "}
                <GoLocation fontSize={8} className=" mr-2" />
                {p}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center w-3/4 text-xl mt-8">
            <Link href={`tel:${psych.whatsapp}`} passHref>
              <button className="flex justify-center items-center shadow shadow-teal-900 w-28 py-1 bg-teal-600 rounded-lg text-white">
                <span className="font-semibold">Call</span>{" "}
                <FiPhoneCall fontSize={20} className="ml-2" />{" "}
              </button>
            </Link>

            <button
              onClick={() => {
                router.push(`/p/${psych.username}`);
              }}
              className="flex justify-center items-center shadow shadow-teal-900 w-28 py-1 bg-teal-600 rounded-lg text-white"
            >
              <span className="font-semibold">Profile</span>{" "}
              <CgProfile fontSize={20} className="ml-2" />{" "}
            </button>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default PhycologistCard;
