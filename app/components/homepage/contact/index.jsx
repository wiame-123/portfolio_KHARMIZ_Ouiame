import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

// Données personnelles
const personalData = {
  email: "ouiame.kharmize@gmail.com",
  phone: "+212 636780674",
  address: "Rabat, Maroc",
  github: "https://github.com/your-profile",
  linkedIn: "https://www.linkedin.com/in/wiame-kharmiz-/"
};

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24">
      {/* Indicateur vertical CONTACT */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Bouton Contact With Me - Centré */}
      <div className="mb-8 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-[#D4B5A5] to-[#B89685] rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          CONTACT WITH ME
        </button>
      </div>

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* Partie gauche - Texte d'introduction en NOIR */}
        <div className="space-y-4">
          <p className="text-gray-900 text-base leading-relaxed font-medium">
            If you have any questions or concerns, please don't hesitate to contact me. 
            I am open to any work opportunities that align with my skills and interests.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            You can reach me via email or through my social media profiles. I will respond as soon as possible!
          </p>
          
          {/* Email, Phone, Location - Déplacés sous le texte */}
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-gray-300">
            <div className="flex items-center gap-3">
              <div className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E8D3C8] hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0">
                <Mail className="text-gray-800" size={20} />
              </div>
              <span className="text-gray-900 text-sm md:text-base font-medium">{personalData.email}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E8D3C8] hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0">
                <Phone className="text-gray-800" size={20} />
              </div>
              <span className="text-gray-900 text-sm md:text-base font-medium">{personalData.phone}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E8D3C8] hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0">
                <MapPin className="text-gray-800" size={20} />
              </div>
              <span className="text-gray-900 text-sm md:text-base font-medium">{personalData.address}</span>
            </div>
          </div>
        </div>

        {/* Partie droite - Image ou espace vide pour équilibre */}
        <div className="space-y-6">
          <div className="h-full flex items-center justify-center">
            {/* Vous pouvez ajouter une image ou laisser cet espace pour l'équilibre visuel */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Let's Connect!</h3>
              <p className="text-gray-700">Feel free to reach out through any platform</p>
              
              {/* Réseaux sociaux - Email Me, GitHub, LinkedIn en ligne */}
              <div className="flex items-center justify-center gap-3 pt-4 flex-wrap">
                <a 
                  href={`mailto:${personalData.email}`}
                  className="px-5 py-2 bg-[#8b98a5] rounded-full text-white font-medium hover:bg-[#E8D3C8] hover:text-gray-800 transition-all duration-300 text-sm"
                >
                  Email Me
                </a>
                
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href={personalData.github}
                  className="inline-block"
                >
                  <div className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Github className="text-gray-800" size={24} />
                  </div>
                </a>
                
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href={personalData.linkedIn}
                  className="inline-block"
                >
                  <div className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Linkedin className="text-gray-800" size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;