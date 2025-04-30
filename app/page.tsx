import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";
// import Solution from "@/components/Solution";

import React from "react";
import Testimonials from "../components/Testimonial";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    images: "/our-attorneys/chikasi.jpeg",
  },
  title: "Chikasi & Associates",
  description: "Number One law firm | Chikasi & Associates",
  generator: "",
  applicationName: "Chikasi & Associates",
  referrer: "origin-when-cross-origin",
  keywords: ["Chikasi & Associates", "Gratias Deo Chambers"],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <OurServices />
      <Testimonials />
      {/* <Solution /> */}
      <ClientLogos />
    </div>
  );
};

export default page;
