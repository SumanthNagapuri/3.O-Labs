"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  { name: "Srikar", role: "Product Analyst", image: "/team/srikar.png" },
  { name: "Shiva", role: "Full Stack Developer", image: "/team/shiva.png" },
  { name: "Zuber", role: "Full Stack Developer", image: "/team/zuber.png" },
  { name: "Griffin", role: "HR", image: "/team/mahetaab.png" },
  { name: "Ashvith", role: "Full Stack Developer", image: "/team/ashvith.png" },
  { name: "Aqib", role: "Full Stack Developer", image: "/team/aqib.png" },
  // { name: "Gratian", role: "UI/UX Designer", image: "/team/james.png" },
  { name: "Dinesh", role: "Frontend Developer", image: "/team/dinesh.png" },
  // { name: "Suraj", role: "Full Stack Developer"//, image: "/team/suraj.png" },
  { name: "Sumanth N", role: "Full Stack Developer", image: "/team/sumanth1.png" },
  { name: "Sumanth G", role: "Full Stack Developer", image: "/team/sumanth.png" },
  { name: "Sampath", role: "Full Stack Developer", image: "/team/sampath.png" },
];

export default function TeamsPage() {
  return (
    <>
      <Header />

      <main className="pt-32">

        {/* DIRECTORS SECTION */}
        <section className="relative py-28 overflow-hidden">

          {/* star decoration */}
          <img
            src="/decor/star.png"
            alt="star"
            className="absolute right-[18%] top-32 w-8"
          />

          {/* side geometric decoration */}
          <img
            src="/decor/side-shape.png"
            alt="shape"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] opacity-60"
          />

          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-24 items-start">

            {/* LEFT DIRECTORS */}
            <div className="flex gap-14">

              {/* Director 1 */}
              <div className="text-center">
                <Image
                  src="/directors/nithin.png"
                  alt="Nithin Varma"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />

                <p className="mt-4 font-medium text-gray-900">
                  Nithin Varma M
                </p>

                <p className="text-sm text-gray-500">
                  Co-Founder
                </p>

                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Twitter size={16} />
                  <Linkedin size={16} />
                </div>
              </div>

              {/* Director 2 */}
              <div className="text-center">
                <Image
                  src="/directors/sai.png"
                  alt="Sai Kiran"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />

                <p className="mt-4 font-medium text-gray-900">
                  Sai kiran G L
                </p>

                <p className="text-sm text-gray-500">
                  Co-Founder
                </p>

                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Twitter size={16} />
                  <Linkedin size={16} />
                </div>
              </div>

            </div>

            {/* RIGHT TEXT */}
            <div className="text-center md:text-left mt-16">

              <h1 className="text-[45px] font-medium leading-[1.1] tracking-tight text-[#1a1a1a]">
                Meet the creative minds
              </h1>

              <h2 className="text-[45px] mt-4 font-medium text-[#1a1a1a]">
                Our Directors
              </h2>

            </div>

          </div>
        </section>


        {/* TEAM SECTION */}
        <section className="max-w-[1200px] mx-auto px-6 mt-28">

          <div className="grid md:grid-cols-12 gap-20">

            {/* LEFT TEXT */}
            <div className="md:col-span-4">

              <p className="text-purple-600 text-sm font-medium">
                Our team
              </p>

              <h2 className="text-3xl font-semibold mt-3">
                Meet our team members
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Complete the form below to send us a message.
                Our support team will promptly respond to your request.
              </p>

            </div>


            {/* RIGHT TEAM GRID */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-14">

              {teamMembers.map((member, i) => (
                <div key={i} className="text-center">

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={90}
                    height={90}
                    className="rounded-full mx-auto object-cover"
                  />

                  <h4 className="mt-3 font-medium text-gray-900">
                    {member.name}
                  </h4>

                  <p className="text-sm text-purple-600">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-3 mt-2 text-gray-500">
                    <Github size={16} />
                    <Twitter size={16} />
                    <Linkedin size={16} />
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* CTA SECTION */}
        <section className="relative py-36 text-center px-6 mt-32 overflow-hidden">

          <div className="absolute inset-0 -z-10">
            <img
              src="/CTA.png"
              alt="cta background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-4xl font-semibold leading-tight text-gray-900">
              Engineering intelligent systems for
              <br />
              ambitious brands
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Ready to move beyond ordinary software? We design scalable
              products, AI-driven workflows, and autonomous agents that
              engage users and streamline operations.
            </p>

            <Link href="/contact">
  <button
    style={{
      marginTop: "32px",
      background: "black",
      color: "white",
      padding: "12px 28px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",
      transition: "opacity 0.2s",
    }}
  >
    Let’s Collaborate ↗
  </button>
</Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}