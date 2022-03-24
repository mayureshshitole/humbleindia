import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase/clientApp";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const links = [
    { name: "home", link: "/" },
    { name: "Psychologist", link: "/p" },
    { name: "blogs", link: "/blogs" },
  ];

  const router = useRouter();

  const fireBaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const [user, loading, error] = useAuthState(fireBaseAuth);

  const signin = async () => {
    const { user } = await signInWithPopup(fireBaseAuth, provider);
    const { refreshToken, providerData } = user;
    console.log(user);

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));

    router.push("/p");
  };

  const signout = async () => {
    localStorage.clear();
    await fireBaseAuth.signOut().then(() => {
      router.push("/");
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md fixed top-0 left-0 w-full z-20  bg-teal-900 text-white">
      <div className="md:flex items-center justify-between  py-4 px-7 md:px-10">
        <Link passHref href={"/"}>
          <div>
            <div className="font-bold text-2xl cursor-pointer flex items-center ">
              Humble
            </div>
            <div className=" text-xs ml-3 md:ml-5 cursor-pointer flex items-center capitalize italic">
              peace in our time
            </div>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <ul
          className={`md:flex  bg-teal-900 rounded-b-lg  md:items-center justify-between md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100 border-b-2 border-b-gray-200 md:border-0"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {links.map((links) => (
            <li
              onClick={() => setOpen(!open)}
              key={links.name}
              className="md:ml-8 md:my-0 my-7 text-xl font-semibold capitalize hover:text-teal-500 transition duration-300 ease-in-out"
            >
              <Link passHref href={links.link}>
                {links.name}
              </Link>
            </li>
          ))}
          {!user ? (
            !loading ? (
              <button
                onClick={signin}
                className="flex gap-2 bg-white border-2 border-white py-2 px-4 text-teal-900 font-semibold capitalize text-xl rounded md:ml-8 hover:bg-teal-800 hover:text-white duration-500"
              >
                Login <FcGoogle fontSize={30} />
              </button>
            ) : (
              <div></div>
            )
          ) : (
            <div></div>
          )}{" "}
          {user && (
            <>
              <div className="md:hidden flex justify-center items-center cursor-pointer group">
                <Image
                  src={user.photoURL}
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="rounded-full"
                />
                <h2 className="ml-2  text-xl font-semibold capitalize group-hover:text-teal-500 transition duration-300 ease-in-out">
                  {user.displayName.split(" ")[0]}
                </h2>
                <IoLogOut onClick={signout} fontSize={40} className="ml-2" />
              </div>
            </>
          )}
        </ul>
        {user && (
          <>
            <div className="hidden md:flex justify-center items-center cursor-pointer group">
              <Image
                src={user.photoURL}
                width={50}
                height={50}
                layout="intrinsic"
                className="rounded-full"
              />
              <h2 className="ml-2  text-xl font-semibold capitalize group-hover:text-teal-500 transition duration-300 ease-in-out">
                {user.displayName}
              </h2>
              <IoLogOut onClick={signout} fontSize={40} className="ml-2" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
