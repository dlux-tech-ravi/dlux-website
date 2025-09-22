import React from "react";
import { motion } from "framer-motion";

const fleetData = [
  { title: "Luxury Sedans", img: "https://images.ctfassets.net/pj0maraabon4/7j6lmSUHeMebkEec0Pgqk/02385ebb3bcbf8c951236ae4a9d24fe7/adobe.png" },
  { title: "SUVs", img:"https://images.ctfassets.net/pj0maraabon4/29Bg7qu2eV5aMWjUBvRB1i/7ea33ffa22915fe47cdad736f31003c6/Group_918.png"},
  { title: "Convertibles", img: "https://images.ctfassets.net/pj0maraabon4/3cydXFqdyuWFkc2WYkyUgK/78c69f6ac0445291fa0391ac87f2f174/Mask_Group_68.png" },
  { title: "Sports Cars", img: "https://images.ctfassets.net/pj0maraabon4/7AkGf6wr03XKdsJefQq2La/4c0c882583b8459641366382c54da5cf/image.png"},
  { title: "Electric Cars", img: "https://images.ctfassets.net/pj0maraabon4/1v0pkcjofxyJ9IsbWGxy5v/56ef4689fc915962f2d5a1bf7d10cccd/image_16.png"},
  { title: "Limousines", img: "https://images.ctfassets.net/pj0maraabon4/3f3gymCyBE2a57NH4DDTlL/46994506f0a3ef20f0a818308d02b11e/Group_7391.png" },
];

const ClientLogos = () => {
  return (
    <section className="relative  w-full m-auto  justify-center text-white py-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        
        <h2 className="text-4xl lg:text-5xl font-bold">
          Our Proud {" "}
          <span className="bg-gradient-to-r from-[#ff3901] to-[#F07800] bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-xl text-center m-auto text-lg lg:text-xl">
         We are honored to collaborate with trusted partners who share our vision and contribute to our collective success.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6 animate-marquee"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {[...fleetData, ...fleetData].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-w-[150px] lg:min-w-[250px] lg:max-w-[250px] bg-[rgba(234, 127, 96, 1)] rounded-xl p-6 border-[2px]
               border-[#F07800] flex flex-col items-center justify-center shadow-md"
            >
              <img src={item.img} alt={item.title} className="w-30 h-30 lg:mb-4" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
