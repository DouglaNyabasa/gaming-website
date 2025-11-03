import React, { useState } from "react";
import { Avatar } from "../../constants";

const Characters = () => {
  // tract the selected avatar

  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  // Avatar data

  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* Section Title */}

      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>
      {/* CHaracters area  */}

      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* left side Avatar details   */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* slected Avatar info cards   */}

          <div className="bg-gray-900/80 backdrop-blur-sm  p-4 mb-4 border border-gray-800  shadow-[0_0_15px_rgba(167,139,250,0.2)] rounded-lg">
            <h1 className="text-2xl font-semibold mb-2">
              {" "}
              {currentAvatar.name}
            </h1>
            {/* Avatar stats   */}
            <div className="space-y-3 mb-16 ">
              {/* power   */}

              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.power}</span>
              </div>

              {/* stable   */}

              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.stable}</span>
              </div>

              {/* penetrate   */}

              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrate</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.penetrate}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.penetrate}</span>
              </div>

              {/* portable   */}

              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>

            {/* action buttons */}

            <div className="flex gap-3">
              <button className="px-4 py-1 rounded-md font-semibold hover:opacity-70  transition-all duration-300 bg-violet-900 text-white ">
                Proficient
              </button>
              <button className="px-4 py-1 rounded-md font-semibold hover:opacity-70  transition-all duration-300 bg-violet-900 text-white ">
                Redmption
              </button>
            </div>
          </div>

          {/* avatar selection card */}

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
