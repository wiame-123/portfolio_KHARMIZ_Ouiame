"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/CV_Wiame_KHARMIZ (3).pdf');
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Wiame_KHARMIZ.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#D4B5A5]/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#B89685]/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#E8D3C8]/30 rounded-full blur-lg"></div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 max-w-7xl mx-auto px-6">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-8">
          <div className="space-y-4">
            <p className="text-[#D4B5A5] text-lg font-medium tracking-wide uppercase">Hello, I&apos;m</p>
            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:font-extrabold lg:text-[3.5rem] lg:leading-[4rem]">
              <span className="text-[#D4B5A5]">{personalData.name}</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">{personalData.designation}</p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={personalData.github}
              target='_blank'
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <BsGithub size={24} className="text-[#D4B5A5] group-hover:text-[#B89685] transition-colors duration-300" />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <BsLinkedin size={24} className="text-[#D4B5A5] group-hover:text-[#B89685] transition-colors duration-300" />
            </Link>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="#contact" className="group">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4B5A5] to-[#B89685] rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span>Get In Touch</span>
                <RiContactsFill size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="#about" className="px-8 py-4 border-2 border-[#D4B5A5] rounded-full text-[#D4B5A5] font-semibold text-lg hover:bg-[#D4B5A5] hover:text-white transition-all duration-300">
              Learn More
            </Link>
          
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#B89685] to-[#D4B5A5] rounded-2xl blur opacity-75"></div>
            <div className="relative bg-[#B89685] rounded-2xl p-4 shadow-2xl">
              <Image
                src={personalData.profile}
                width={400}
                height={500}
                alt="KHARMIZ Ouiame"
                className="rounded-xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;