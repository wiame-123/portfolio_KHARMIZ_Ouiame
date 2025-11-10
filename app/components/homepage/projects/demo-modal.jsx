"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const DemoModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Placeholder pour les screenshots - vous pourrez les remplacer par vos vraies images
  const screenshots = [
    '/public/png/z.png',
    '/public/png/z.png',
    '/public/png/placeholder.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-[#0d1224] rounded-2xl border border-[#1b2c68a0] max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1b2c68a0]">
          <h2 className="text-2xl font-bold text-[#E8D3C8]">{project?.name} - Démonstration</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#1b2c68a0] transition-colors duration-300"
          >
            <FaTimes className="text-[#E8D3C8] text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Screenshot Display */}
          <div className="relative mb-6">
            <div className="relative w-full h-96 bg-[#0a0d37] rounded-lg overflow-hidden">
              <Image
                src={screenshots[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1b2c68a0] hover:bg-[#D4B5A5] transition-colors duration-300"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#1b2c68a0] hover:bg-[#D4B5A5] transition-colors duration-300"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>

          {/* Image indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-[#D4B5A5]' : 'bg-[#1b2c68a0]'
                }`}
              />
            ))}
          </div>

          {/* Project info */}
          <div className="text-center">
            <p className="text-[#E8D3C8] text-lg mb-4">{project?.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {project?.tools?.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#B89685]/20 text-[#D4B5A5] rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-4 p-6 border-t border-[#1b2c68a0]">
          <button
            onClick={onClose}
            className="px-6 py-2 border-2 border-[#D4B5A5] text-[#D4B5A5] rounded-full hover:bg-[#D4B5A5] hover:text-white transition-all duration-300"
          >
            Fermer
          </button>
          {project?.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#D4B5A5] text-white rounded-full hover:bg-[#B89685] transition-all duration-300"
            >
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
