import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title:"Clean Codebase",
    text: 'DLUX has been one of our most invaluable assets in the continued usage and uptake of Workfront across our business. Lux and his team have provided us with unique and customized solutions, and proactive engagement.Couldn\'t have done it without them! ',
    name: "- Head of Campaign Operations and Delivery",
    location: "USA",
    image:"/static/media/client3.ecfbbbc870c2bcf74e5e.png"
  },
  {
    id: 2,
    title:"Great Execution!",    
    text: 'DLUX\'s seamless integration with Adobe Workfront has been a game-changer for our project management efforts. The fully customizable and flexible workflow has saved time and boosted productivity. The adaptability of the platform empowered us to efficiently handle tasks, budgets, and resources, even for the most complex  projects.',
    name: "- Marketing Head",
    location: "USA",
    image:"/static/media/client2.c49a6a673df0d7c79153.png"
  },
  {
    id: 3,
     title:"Tremendous Job Team",
    text: "I have thoroughly enjoyed my brainstorming sessions with the DLUX team. The DLUX team often thinks two steps ahead as well. Their knowledge of the Workfront solution and professional services have always exceeded our expectations and DLUX has delivered work as per agreed schedules.",
    name: "– Group Project Manager",
    location: "UK",

    image:"/static/media/client1.2c40b1f66e85d4c99d1f.png"
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlides = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="relative w-full  text-white py-16 px-6 md:px-20  overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-start items-center relative">
        {/* Left Column - Dummy Image */}
        <motion.div
          className="relative lg:pb-[250px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="https://images.ctfassets.net/pj0maraabon4/41J54pCB5auSK01fbl2S1w/fbae03cb12070c737b18d86b09b2cf0b/90.png"
            alt="Dummy"
            className="w-[526px] h-[413px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute top-[30%] left-[10%] w-80 h-80 rounded-full 
      bg-gradient-to-r from-[#BB7CE4] to-[#02162F] 
      blur-[100px] opacity-80 z-0" />
          <p className="text-xl font-bold mb-2"><span className="bg-[#BB7CE4] bg-clip-text text-transparent border border-[#BB7CE4] px-2 py-[3px] rounded-md">
          Testimonials
          </span> </p>
          <h2 className="text-3xl lg:text-5xl font-bold leading-snug mb-8">
            <span className="bg-[#BB7CE4] bg-clip-text text-transparent mr-1">
          Behind 
          </span>
           Every Workflow,<br />  There's a Story!
          </h2>

          <div className="relative lg:-left-[20%]">
            {/* Testimonial Carousel */}
            <div className="flex gap-6 overflow-hidden h-auto lg:h-[280px]">
              <AnimatePresence mode="popLayout">
                {currentSlides.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: i === 0 ? 200 : 400, opacity: 0 }}
                    animate={{ x: i * 500, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="lg:absolute top-0 bg-neutral-900 rounded-xl p-6  lg:w-[453px] h-[296px] shadow-lg"
                  >
                    {i === 0 && (
                      <div className="text-3xl text-white absolute top-4 left-4">
                        <i class="fa-solid fa-quote-left w-5 h-5"></i>
                      </div>
                    )}
                    <div className="pt-8 flex flex-col justify-between h-full">
                      {/* <h4 className="font-bold text-[24px] mb-4">
                        {item.title}
                      </h4> */}
                      <p className="text-sm lg:text-base mb-4 leading-relaxed flex-grow">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-3">
                        {/* <div className="w-16 h-16"><img src={item.image} alt={item.name}/> </div> */}
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          {/* <p className="text-xs text-gray-400">{item.location}</p> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-2 mt-14 pl-[20%] ">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-[#BB7CE4]" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
