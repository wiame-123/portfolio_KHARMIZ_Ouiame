"use client";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

function Navbar() {
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
    <nav className="bg-white/60 backdrop-blur-md border-b border-[#E8D3C8]/30 sticky top-0 z-50">
      <div className="flex items-center justify-center py-4 px-6">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#D4B5A5] text-2xl font-bold hover:text-[#B89685] transition-colors duration-300">
          
          </Link>
        </div>
        <ul className="flex items-center space-x-8" id="navbar-default">
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#about">
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#experience">
              EXPERIENCE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#skills">
              SKILLS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#education">
              EDUCATION
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#blogs">
              CERTIFICATIONS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:text-[#D4B5A5] group" href="/#projects">
              PROJECTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B5A5] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 bg-gradient-to-r from-[#D4B5A5] to-[#B89685] text-white rounded-full 
                       font-semibold text-sm flex items-center gap-2 shadow-md
                       hover:shadow-lg hover:scale-105 transition-all duration-300
                       hover:from-[#B89685] hover:to-[#D4B5A5]"
            >
              <HiDownload size={18} />
              <span>CV</span>
            </button>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;