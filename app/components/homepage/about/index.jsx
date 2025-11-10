// @flow strict

import { personalData } from "@/utils/data/personal-data";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A89A] to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#D4B5A5]"></span>
          <span className="bg-[#D4B5A5] w-fit text-white p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="w-24 h-[2px] bg-[#D4B5A5]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">  
          <div className="mb-5">
            <button className="px-6 py-3 bg-gradient-to-r from-[#D4B5A5] to-[#B89685] rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              WHO AM I?
            </button>
          </div>
          <p className="text-gray-700 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-2xl">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4B5A5]/20 to-[#B89685]/20 rounded-3xl blur-xl"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4B5A5] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#B89685] rounded-full animate-bounce"></div>
            
            {/* Main container */}
            <div className="relative bg-[#B89685]/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-[#E8D3C8]/30">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Soft Skills</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#D4B5A5] to-[#B89685] mx-auto rounded-full"></div>
              </div>
              
              {/* Skills horizontal scroll with animations */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {[
                  { skill: "Versatile", delay: "0s", icon: "◆" },
                  { skill: "Intellectually Curious", delay: "0.1s", icon: "◇" },
                  { skill: "Self-Critical", delay: "0.2s", icon: "◈" },
                  { skill: "Communicative", delay: "0.3s", icon: "◊" },
                  { skill: "Perseverant", delay: "0.4s", icon: "◉" },
                  { skill: "Analytical", delay: "0.5s", icon: "◐" },
                  { skill: "Proactive", delay: "0.6s", icon: "◑" },
                  { skill: "Hardworking", delay: "0.7s", icon: "◒" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden animate-fadeInUp flex-shrink-0"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="bg-gradient-to-br from-[#F7DED7]/80 to-[#E8D3C8]/80 rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg group-hover:from-[#D4B5A5] group-hover:to-[#B89685] cursor-pointer min-w-[120px]">
                      <div className="text-center">
                        <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300 text-[#B89685] group-hover:text-white">
                          {item.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                          {item.skill}
                        </p>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4B5A5]/0 to-[#B89685]/0 group-hover:from-[#D4B5A5]/20 group-hover:to-[#B89685]/20 transition-all duration-500 rounded-xl"></div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-[#D4B5A5] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#B89685] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4B5A5] to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;