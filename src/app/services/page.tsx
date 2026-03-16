"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

type Section = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  listHeading: string;
  bullets: string[];
  closing: string;
};

const SECTIONS: Section[] = [
  {
    id: "fullstack",
    label: "Full-Stack Apps",
    title: "Full-Stack Product Engineering",
    description:
      "We design and engineer complete, production-ready products — covering frontend, backend, data, and infrastructure.",
    icon: "/icons/fullstack.png",
    listHeading: "Our work spans:",
    bullets: [
      "modern web and mobile applications",
      "scalable APIs and backend systems",
      "clean architecture designed to evolve over time",
    ],
    closing:
      "Whether it's an early version or a growing product, we focus on building systems that are reliable, maintainable, and ready to scale.",
  },
  {
    id: "ai",
    label: "AI Workflows",
    title: "AI Workflows & Intelligent Automation",
    description:
      "We build workflows where systems don't just execute steps, but make informed decisions along the way.",
    icon: "/icons/aiworkflow.png",
    listHeading: "This includes:",
    bullets: [
      "automating complex, multi-step processes",
      "integrating intelligence into existing products",
      "reducing manual effort across operations and user flows",
    ],
    closing:
      "These workflows sit between traditional applications and fully autonomous systems — adding leverage without unnecessary complexity.",
  },
  {
    id: "agents",
    label: "Autonomous Agents",
    title: "Autonomous AI Agents",
    description:
      "We engineer agents that can reason, act, and operate independently within defined boundaries.",
    icon: "/icons/agents.png",
    listHeading: "These agents are designed to:",
    bullets: [
      "handle complex tasks end to end",
      "interact with tools, data, and systems",
      "adapt based on context and feedback",
    ],
    closing:
      "They go beyond simple automation, enabling products to perform work that previously required constant human involvement.",
  },
];

const LINE_WIDTH = 4;
const DOT_SIZE = 12;

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [orangePx, setOrangePx] = useState<number>(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const sectionTopsRef = useRef<number[]>([]);

  const computeSectionTops = useCallback(() => {
    const servicesEl = servicesRef.current;
    if (!servicesEl) return;
    sectionTopsRef.current = sectionRefs.current
      .filter(Boolean)
      .map((el) => (el as HTMLDivElement).offsetTop - servicesEl.offsetTop);
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const servicesEl = servicesRef.current;
    if (!container || !servicesEl) return;

    const scrollTop = container.scrollTop;
    const viewportH = container.clientHeight;
    const trigger = viewportH * 0.35;

    // Determine active section
    let currentIndex = 0;
    sectionTopsRef.current.forEach((top, i) => {
      const absTop = servicesEl.offsetTop - container.offsetTop + top;
      if (scrollTop + trigger >= absTop) currentIndex = i;
    });

    setActiveIndex((prev) => {
      if (prev !== currentIndex) setPrevIndex(prev);
      return currentIndex;
    });

    // Orange fill height
    const servicesTop = servicesEl.offsetTop - container.offsetTop;
    const servicesHeight = servicesEl.offsetHeight;
    const traveled = scrollTop + trigger - servicesTop;
    setOrangePx(Math.max(0, Math.min(traveled, servicesHeight)));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    setTimeout(() => {
      computeSectionTops();
      handleScroll();
    }, 50);
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll, computeSectionTops]);

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Dot and label Y positions
  const dotTop = Math.max(0, orangePx - DOT_SIZE / 2);
  const labelTop = dotTop - 6; // vertically centre the label on the dot

  return (
    <>
      <Header />

      <main
        ref={containerRef}
        style={{
          height: "100vh",
          overflowY: "auto",
          background: "#f7f7f7",
          paddingTop: "8rem",
        }}
      >
        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 20px",
            background: "linear-gradient(to bottom, #f4e3cf, #f0dcc4, white)",
          }}
        >
          <h1 style={{ fontSize: "56px", fontWeight: 600 }}>
            Our Capabilities
          </h1>
          <p
            style={{
              marginTop: "24px",
              fontSize: "18px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              background: "linear-gradient(90deg,#ff4d4d,#a855f7,#3b82f6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            We design and build scalable full-stack products, intelligent AI
            workflows, and autonomous agents that transform how software
            operates and grows.
          </p>
        </section>

        {/* SERVICES */}
        <section
          style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 24px" }}
        >
          <div
            ref={servicesRef}
            style={{ display: "flex", position: "relative" }}
          >
            {/* LEFT spacer — same width as before so layout doesn't shift */}
            <div style={{ width: "170px", flexShrink: 0 }} />

            {/* TRACKER LINE + DOT + FLOATING LABEL */}
            <div
              style={{
                position: "relative",
                margin: "0 32px",
                width: `${LINE_WIDTH}px`,
                flexShrink: 0,
              }}
            >
              {/* Gray base line */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "#d1d5db",
                  borderRadius: "999px",
                }}
              />

              {/* Orange fill */}
              <div
                style={{
                  position: "absolute",
                  width: `${LINE_WIDTH}px`,
                  height: `${orangePx}px`,
                  background: "#E8573A",
                  borderRadius: "999px",
                  transition: "height 0.08s linear",
                }}
              />

              {/* Glowing dot */}
              <div
                style={{
                  position: "absolute",
                  top: `${dotTop}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: `${DOT_SIZE}px`,
                  height: `${DOT_SIZE}px`,
                  borderRadius: "50%",
                  background: "#E8573A",
                  boxShadow:
                    "0 0 0 3px rgba(232,87,58,0.20), 0 0 8px 2px rgba(232,87,58,0.35)",
                  transition: "top 0.08s linear",
                  zIndex: 2,
                }}
              />

              {/*
                Floating label container — moves with the dot.
                Positioned to the LEFT of the tracker line, inside the 170px spacer.
                right: LINE_WIDTH + 24 pushes it away from the line itself.
              */}
              <div
                style={{
                  position: "absolute",
                  top: `${labelTop}px`,
                  right: `${LINE_WIDTH + 24}px`,
                  width: "170px",
                  height: "28px",           // fixed height so labels stack cleanly
                  transition: "top 0.09s linear",
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                {SECTIONS.map((section, i) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(i)}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      whiteSpace: "nowrap",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      color: "#E8573A",
                      padding: 0,
                      // Cross-fade + subtle slide on section change
                      opacity: activeIndex === i ? 1 : 0,
                      transform:
                        activeIndex === i
                          ? "translateY(0px)"
                          : prevIndex === i
                          ? "translateY(-8px)"
                          : "translateY(8px)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      pointerEvents: activeIndex === i ? "auto" : "none",
                    }}
                  >
                    {section.label} →
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div style={{ flex: 1 }}>
              {SECTIONS.map((section, i) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  style={{ paddingBottom: "80px", maxWidth: "420px" }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    {section.title}
                  </h2>

                  <p style={{ color: "#6b7280", marginBottom: "24px" }}>
                    {section.description}
                  </p>

                  <Image
                    src={section.icon}
                    alt={section.title}
                    width={160}
                    height={160}
                    style={{ marginBottom: "24px" }}
                  />

                  <p style={{ fontWeight: 500, marginBottom: "8px" }}>
                    {section.listHeading}
                  </p>

                  <ul style={{ color: "#6b7280", marginBottom: "24px" }}>
                    {section.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  <p style={{ color: "#9ca3af", marginBottom: "24px" }}>
                    {section.closing}
                  </p>

                  <button
                    style={{
                      background: "black",
                      color: "white",
                      borderRadius: "999px",
                      padding: "10px 24px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Connect to team
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-30 text-center px-6 mt-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/cta.png"
              alt="cta background"
              fill
              style={{ objectFit: "cover" }}
              priority
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
              products, AI-driven workflows, and autonomous agents that engage
              users and streamline operations.
            </p>

            <a href="/contact">
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
                Let&apos;s Collaborate ↗
              </button>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}