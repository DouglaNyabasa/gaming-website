import React from "react";
import "boxicons/css/boxicons.min.css";

const Areana = () => {
  return (
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167, 139, 250, 0.5)",
          }}
        >
          Areana
        </h1>
      </div>

      {/* main container for the bento grid layout */}

      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6">
        {/* left column takes 1/3 of the desktop screen */}

        <div className="md:col-span-1 space-y-4 md:space-y-6">
          {/* Card 1 top left */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">
            {/* card background gradient */}
            <div className="absolute h-full w-full ">
              <img src="/images/bento-card1.png" alt="card-1" />
              <button className="absolute h-16 w-full bg-black bg-opacity-70 bottom-0 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                <i className="bxrds  bx-store-alt-2"></i>NFT Store
              </button>
            </div>
          </div>
          {/* Card 2 bottom left */}

          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105">
            <video
              src="/videos/bento-card2.mp4"
              className="w-full h-full object-cover "
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

        {/* right column takes 1/3 of the desktop screen */}

        <div className="md:col-span-2 space-y-4 md:space-y-6">
          {/* top row with 3 small cards */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Card 3 -FIRST SMALL CARD */}

            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                src="/videos/bento-card3.mp4"
                className="w-full h-full object-cover "
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-1/2 z-10 font-extrabold text-2xl">
                Scoriox
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Areana;
