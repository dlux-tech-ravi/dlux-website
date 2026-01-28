import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function AemClientsMarquee() {
  const [clients, setClients] = useState(null);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  const query = `
  {
    ourClients: dluxHomePage(id:"4A72lxXg2x9dph73jiAulF") {
      dluxHeading
      dluxPara
      dluxImageCollection {
        items {
          url
        }
      }
    }
  }`;

  /* ---------- FETCH CONTENTFUL ---------- */
  useEffect(() => {
    fetch(
      "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => res.json())
      .then((json) => setClients(json?.data?.ourClients))
      .catch(console.error);
  }, [accessToken]);

  /* ---------- GSAP MARQUEE ---------- */
  useEffect(() => {
    if (!clients) return;

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    const row1Width = row1.scrollWidth / 2;
    const row2Width = row2.scrollWidth / 2;

    gsap.set(row1, { x: 0 });
    gsap.set(row2, { x: -row2Width });

    gsap.to(row1, {
      x: -row1Width,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    gsap.to(row2, {
      x: 0,
      duration: 34,
      ease: "none",
      repeat: -1,
    });
  }, [clients]);

  if (!clients) return null;

  const logos = clients.dluxImageCollection.items.slice(0, 10);
  const row1 = logos.slice(0, 5);
  const row2 = logos.slice(5, 10);

  return (
    <section className="bg-neutral-900 text-white py-28 overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {clients.dluxHeading}
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          {clients.dluxPara}
        </p>
      </div>

      {/* MARQUEE ROWS */}
      <div className="space-y-10">

        {/* ROW 1 – RIGHT TO LEFT */}
        <div className="relative w-full overflow-hidden">
          <div ref={row1Ref} className="flex w-max">
            {[...row1, ...row1].map((logo, index) => (
              <LogoCard key={index} logo={logo.url} />
            ))}
          </div>
        </div>

        {/* ROW 2 – LEFT TO RIGHT */}
        <div className="relative w-full overflow-hidden">
          <div ref={row2Ref} className="flex w-max">
            {[...row2, ...row2].map((logo, index) => (
              <LogoCard key={index} logo={logo.url} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- CARD ---------- */
function LogoCard({ logo }) {
  return (
    <div
      className="
        flex-shrink-0
        w-[220px]
        h-[220px]
        mx-4
        rounded-2xl
        flex
        items-center
        justify-center
        transition-colors
        duration-300
        cursor-pointer
      "
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))")
      }
    >
      <img
        src={logo}
        alt="Client logo"
        className="max-h-14 max-w-[130px] object-contain opacity-85"
        loading="lazy"
      />
    </div>
  );
}
