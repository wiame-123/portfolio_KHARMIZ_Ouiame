"use client";
import { projectsData } from '@/utils/data/projects-data';
import { useState } from 'react';
import SingleProject from './single-project';

const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleToggle = (projectId) => {
    // Ferme le projet actuel s'il est déjà ouvert, sinon ouvre le nouveau projet
    setExpandedProjectId((currentId) => {
      // Si on clique sur le projet déjà ouvert, on le ferme
      if (currentId === projectId) {
        return null;
      }
      // Sinon, on ouvre le nouveau projet (ce qui ferme automatiquement l'ancien)
      return projectId;
    });
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 px-4 md:px-12">
      {/* Titre */}
      <div className="flex items-center justify-start relative mb-16">
        <span className="bg-[#D4B5A5] text-white px-6 py-3 text-xl rounded-md z-10">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#D4B5A5] ml-2"></span>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <SingleProject 
            key={project.id} 
            project={project} 
            index={index}
            isExpanded={expandedProjectId === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
