import React from "react";
import { Link } from "react-router-dom";

const IconCards = () => {
  return (
    <section className="bg-black text-white max-w-7xl mx-auto px-6 md:py-20 relative">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-opensans">
         Driving Success Beyond Implementation
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
         Success isn’t just about implementations — it’s about business transformation. DLUX success stories showcase how Fortune 500s and fast-scaling teams leverage AI and Martech platforms like Adobe Workfront, Fusion, Commerce, DAM, and Salesforce to streamline workflows, optimize content management, power eCommerce automation, and accelerate growth.

         Dive in and see how we make extraordinary happen.
        </p>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mr-0">

        {/* Card 1 */}
        <div className="bg-[#101010] rounded-2xl w-full overflow-hidden hover:scale-[1.02] transition-transform">
          <img
            src="https://images.ctfassets.net/pj0maraabon4/2wSRFZc07744dw3Ei4Cbqo/4dd1a84930ef0462472b7101ffb017c0/abstract-orange-glowing-lines-background.jpg"
            alt="Proven Outcomes"
            className="w-full h-48 md:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 font-opensans">
              Proven <br /> Outcomes
            </h3>
            <p className="text-gray-400 text-lg">
              Efficiency gains, cost savings,and revenue growth.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-2 bg-[#101010] rounded-2xl bg-cover bg-center p-8 flex flex-col justify-center hover:scale-[1.02] transition-transform"
          style={{
            backgroundImage:
              "url('https://images.ctfassets.net/pj0maraabon4/2zYJ5hEhrvvsOZgLBMsryR/93054debbdabd6c2cbca8b8736b531b3/Clip_path_group.png')",
          }}
        >
          <div className="w-[55px] h-[55px] bg-[#FFFFFF14] flex items-center justify-center rounded-lg mb-4">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/4wIvWbhXfcYa4NXw1CtjB8/635b6de2319a0e7b34fe22c6ac6cefe9/freepik__adjust__35762_2.svg"
              alt="icon"
              className="w-[35px] h-[35px]"
            />
          </div>

          {/* Popup box */}
          <div className="flex justify-center my-6">
            <div className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-[300px] text-center p-6 hover:scale-[1.02] transition">
              <h3 className="mb-2 text-2xl">Let's Connect</h3>
               <Link to="/contact-us">
              <button className="text-[16px] rounded-[12px] border border-[#ffffff14] px-[24px] py-[7.5px] text-white hover:bg-gray-700 transition">
                Contact Us
              </button>
              </Link>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-2 font-opensans">See how brands like yours turn goals into real results.</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Explore our client case studies with proven strategies, key metrics, and measurable impact.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mr-0">

        {/* Card 1 */}
        <div className="bg-[#101010] rounded-2xl p-8 hover:scale-[1.02] transition-transform w-full md:w-[370px] ">
          <div className="w-[55px] h-[55px] bg-[#FFFFFF14] rounded-lg flex items-center justify-center mb-4">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/2jIREOrYeKfOKGIrxf3sc8/85613829eceb9fc4430e5ddfa832d659/Icon--02.png"
              alt="Cross Industry Wins"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 font-opensans">
            Cross <br /> Industry Wins
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Retail, healthcare, finance, media, and beyond.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#101010] rounded-2xl p-8 hover:scale-[1.02] transition-transform md:w-[370px] ">
          <div className="w-[55px] h-[55px] bg-[#FFFFFF14] rounded-lg flex items-center justify-center mb-4">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/4wIvWbhXfcYa4NXw1CtjB8/635b6de2319a0e7b34fe22c6ac6cefe9/freepik__adjust__35762_2.svg"
              alt="Future Ready Tech"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 font-opensans">
            Future <br /> Ready Tech
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            AI, automation, and integrations that scale.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#101010] rounded-2xl p-8 hover:scale-[1.02] transition-transform md:w-[370px] ">
          <div className="w-[55px] h-[55px] bg-[#FFFFFF14] rounded-lg flex items-center justify-center mb-4">
            <img
              src="https://images.ctfassets.net/pj0maraabon4/4twrLfRzRAK901DAO6HHx/c50878a597cb87b494cd1fe15db807aa/dlux-dark-logo__2__1.svg"
              alt="DLUX CoE Advantage"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 font-opensans">
            DLUX CoE <br /> Advantage
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Strategies built on playbooks, not guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconCards;
