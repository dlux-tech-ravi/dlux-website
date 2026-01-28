import React, { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    question: "What makes AEM Sites a leading scalable CMS?",
    answer:
      "AEM Sites offers AI-powered authoring, built-in performance optimization for Core Web Vitals, headless capabilities, and seamless integration with AEM Assets for unified content and asset management.",
  },
  {
    question: "How does AEM Assets improve digital asset workflows?",
    answer:
      "With AI-powered DAM features like Brand-Aware Tagging, generative creation via Firefly, advanced governance, and dynamic delivery, AEM Assets streamlines discovery, compliance, and activation across channels.",
  },
  {
    question: "Can AEM support both traditional and headless delivery?",
    answer:
      "Yes — flexible headful and headless models allow omnichannel experiences with reusable content fragments, APIs, and integrations for web, mobile, apps, and beyond.",
  },
  {
    question: "How does combining Sites and Assets benefit my team?",
    answer:
      "Automatic asset updates, governed reuse, and AI optimization reduce manual work and accelerate personalization.",
  },
  {
    question: "What results can I expect in SEO and performance?",
    answer:
      "Improved load times, higher Lighthouse scores, reduced bounce rates, and better SEO rankings.",
  },
];

export default function AemFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightColRef = useRef(null);
  const leftCardRef = useRef(null);

  /* 🔑 Sync left height with right column */
  useEffect(() => {
    if (!rightColRef.current || !leftCardRef.current) return;

    const updateHeight = () => {
      leftCardRef.current.style.minHeight =
        `${rightColRef.current.offsetHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [activeIndex]);

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
           <span className="inline-flex rounded-full border border-[#656565]/35 px-4 py-2 items-center text-sm text-gray-300 gap-3 bg-[#101010]">
              <img
    src="https://images.ctfassets.net/pj0maraabon4/4WH6837PWmPPMC4GKpyDbY/1a3fbb4bb45e6b9490e97039d47de480/dlux-dark-logo-subtitle.svg"
    alt="Adobe"
    className="h-6 w-6"
  />
              FAQ
            </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Adobe Experience Manager (AEM) Sites help in enabling the authoring,
            management, and delivery of digital experiences across all channels.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* LEFT CARD (STICKY + MATCH HEIGHT) */}
          <div className="md:col-span-1">
            <div
              ref={leftCardRef}
              className="sticky top-24 rounded-2xl bg-[#656565]/30 border border-white/10 p-8"
            >
              <h3 className="text-xl font-semibold">
                Frequently <br /> Asked Questions
              </h3>
              <div className="w-full h-[1px] bg-[#656565]/50 mt-8 mb-6"> </div>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                If you’re curious or need more info, feel free to reach out —
                we’re here to help!
              </p>

              <button className="mt-8 inline-flex items-center rounded-full border border-white/30 px-6 py-2 text-sm transition hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div ref={rightColRef} className="md:col-span-2 space-y-4">
            {FAQS.map((faq, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border border-white/10 transition-all duration-300 ${
                    isActive
                      ? "bg-[#656565]/30 p-8"
                      : "bg-[#656565]/30 px-6 py-4 cursor-pointer"
                  }`}
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm md:text-base font-medium">
                      {faq.question}
                    </h4>
                    <span className="ml-4 text-xl text-[#938f8c]">
                      {isActive ? "–" : "+"}
                    </span>
                  </div>

                  {isActive && (
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
