"use client";
import * as React from "react";

function ProjectCard({ project, index }) {
  const handleProjectClick = () => {
    if (project.demo) {
      window.open(project.demo, "_blank");
    }
  };

  return (
    <div
      className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37]
                 w-full h-[430px] cursor-pointer hover:shadow-2xl hover:scale-[1.03]
                 transition-all duration-300 flex flex-col"
      onClick={handleProjectClick}
    >
      {/* Ligne décorative */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4B5A5] to-[#B89685]"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#B89685] to-transparent"></div>
      </div>

      {/* En-tête */}
      <div className="px-6 py-4 relative flex-shrink-0">
        <div className="flex flex-row space-x-1 absolute top-1/2 -translate-y-1/2 left-4">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="flex items-center justify-center">
          <p
            className={`text-center ml-10 text-[#E8D3C8] font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${
              index === 0 ? "text-sm" : "text-lg"
            }`}
          >
            {project.name}
          </p>
        </div>
      </div>

      {/* Corps */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-6 py-4 flex-1 flex flex-col justify-center">
        <code
          className={`font-mono text-justify leading-relaxed ${
            index === 0 ? "text-sm" : "text-base"
          }`}
        >
          <div className="blink mb-1">
            <span className="mr-2 text-[#D4B5A5]">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-[#D4B5A5]">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>

          <div>
            <span className="ml-4 mr-2 text-white">name:</span>
            <span className="text-gray-400">{"'"}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{"', "}</span>
          </div>

          <div className="ml-4 mr-2 mt-1">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{" ['"}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools?.length - 1 !== i && (
                  <span className="text-gray-400">{"', '"}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"'], "}</span>
          </div>

          <div className="mt-1">
            <span className="ml-4 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 mr-2 mt-1">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-gray-400">{"};"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
