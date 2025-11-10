const SingleProject = ({ project, index, isExpanded, onToggle }) => {
  const { name, description, tools = [], role, date, location } = project;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37]
                    w-full cursor-pointer hover:shadow-2xl hover:scale-[1.02]
                    transition-all duration-300 overflow-hidden">
      {/* Ligne décorative */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4B5A5] to-[#B89685]"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#B89685] to-transparent"></div>
      </div>

      {/* En-tête */}
      <div 
        className="px-6 py-4 relative flex-shrink-0"
        onClick={onToggle}
      >
        <div className="flex flex-row space-x-1 absolute top-1/2 -translate-y-1/2 left-4">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-center ml-10 text-[#E8D3C8] font-semibold text-lg flex-1">
            {name}
          </p>
          <span className={`text-[#D4B5A5] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </div>

      {/* Contenu expandable */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="border-t-[2px] border-indigo-900 px-6 py-4">
          {role && (
            <div className="mb-2">
              <span className="text-[#D4B5A5] font-semibold text-sm">Role: </span>
              <span className="text-[#E8D3C8] text-sm">{role}</span>
            </div>
          )}
          
          {date && (
            <div className="mb-2">
              <span className="text-[#D4B5A5] font-semibold text-sm">Période: </span>
              <span className="text-[#E8D3C8] text-sm">{date}</span>
            </div>
          )}

          {location && (
            <div className="mb-3">
              <span className="text-[#D4B5A5] font-semibold text-sm">Lieu: </span>
              <span className="text-[#E8D3C8] text-sm">{location}</span>
            </div>
          )}
          
          <div className="mb-4">
            <p className="text-[#E8D3C8] text-sm md:text-base leading-relaxed text-justify">
              {description}
            </p>
          </div>

          {tools && tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tools.map((tool, id) => (
                <span 
                  key={id}
                  className="px-3 py-1 bg-[#B89685]/20 text-[#D4B5A5] rounded-full text-xs border border-[#B89685]/30"
                >
                  {tool}
            </span>
              ))}
            </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;