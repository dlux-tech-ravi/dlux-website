import React from "react";

const IconCards = () => {
  return (
    <section className="bg-black text-white max-w-7xl mx-auto px-6 py-20">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-opensans">
          What is Lorem Ipsum?
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Success isn’t just about implementations — it’s about business
          transformation. DLUX success stories showcase how Fortune 500s and
          fast-scaling teams leverage AI and Martech platforms like Adobe
          Workfront, Fusion, Commerce, DAM, and Salesforce to streamline
          workflows, optimize content management, power eCommerce automation,
          and accelerate growth.
        </p>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mr-0 md:h-[400px]">
        {/* Card 1 (33%) */}
        <div className="md:col-span-1 bg-[#101010] rounded-2xl w-full h-full overflow-hidden hover:scale-[1.02] transition-transform">
          <img
            src="https://images.ctfassets.net/pj0maraabon4/2wSRFZc07744dw3Ei4Cbqo/4dd1a84930ef0462472b7101ffb017c0/abstract-orange-glowing-lines-background.jpg"
            alt="Proven Outcomes"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 font-opensans">Proven Outcomes</h3>
            <p className="text-gray-400 text-sm">
              Efficiency gains, cost savings, and revenue growth.
            </p>
          </div>
        </div>

        {/* Card 2 (66%) */}
        <div
          className="block w-full h-full md:col-span-2 bg-[#101010] bg-[url('https://images.ctfassets.net/pj0maraabon4/2zYJ5hEhrvvsOZgLBMsryR/93054debbdabd6c2cbca8b8736b531b3/Clip_path_group.png')] 
          bg-cover bg-center rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 hover:scale-[1.02] transition-transform relative"
        >
          <div className="w-full">
            {/* Icon */}
            <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="icon"
                className="w-6 h-6"
              />
            </div>

            {/* Center Box */}
            <div className="flex px-6 py-4 rounded-xl text-center mt-6 md:mt-0 justify-items-center items-center justify-center">
              <div className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-[300px] text-center p-6 transition-transform hover:scale-[1.02]">
                <p className="mb-2">What is Lorem Ipsum?</p>
                <button className="border border-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                  DOWNLOAD
                </button>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 font-opensans">Heading</h3>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[290px] mr-0">
        {/* Card 1 */}
        <div className="bg-[#101010] w-full h-full rounded-2xl p-8 hover:scale-[1.02] transition-transform">
          <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Cross Industry Wins"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-opensans">Cross Industry Wins</h3>
          <p className="text-gray-400 text-sm">
            Retail, healthcare, finance, media, and beyond.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#101010] w-full h-full rounded-2xl p-8 hover:scale-[1.02] transition-transform">
          <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
              alt="Future Ready Tech"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-opensans">Future Ready Tech</h3>
          <p className="text-gray-400 text-sm">
            AI, automation, and integrations that scale.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#101010] w-full h-full rounded-2xl p-8 hover:scale-[1.02] transition-transform">
          <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8143/8143251.png"
              alt="DLUX CoE Advantage"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-opensans">DLUX CoE Advantage</h3>
          <p className="text-gray-400 text-sm">
            Strategies built on playbooks, not guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconCards;
