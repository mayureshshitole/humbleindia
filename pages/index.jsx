import Head from "next/head";
import Image from "next/image";
import BlogSection from "../components/BlogSection";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Humble India | Most Trusted Platform To Meet Your Mental Peace
        </title>
        <meta
          name="description"
          content="We Are Humble India, India's First Platform on a Mission to Spread Mental awareness and connecting common people to India's top Psychologist. Connect with your Psychologist today to get solution on your every problems."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Feature />
      <BlogSection />
    </>
  );
}
