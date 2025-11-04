import React from "react";

const cards = [
  {
    img: "https://images.ctfassets.net/pj0maraabon4/4XHOwXn2rVjuzI70MFqXIJ/90650ef0eb6962f3c908cb49c3931cc3/lux.webp",
    title: "Mountain",
    desc: "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
  },
  {
    img: "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80",
    title: "Road",
    desc: "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
  },
  {
    img: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80",
    title: "Protester",
    desc: "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
  },
];

const Cardstest = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-orange-500">
      <div className="flex flex-wrap justify-around gap-6 w-11/12 max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[341px] h-[534px] bg-white rounded-[15px] p-6 flex items-end shadow-[0px_7px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:-translate-y-5 group overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover rounded-[15px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />

            {/* Info */}
            <div className="relative z-10 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-2xl font-semibold">{card.title}</h1>
              <p className="mt-2 text-sm tracking-wide">{card.desc}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardstest;
