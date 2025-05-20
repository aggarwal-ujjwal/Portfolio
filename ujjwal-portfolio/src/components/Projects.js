import React from 'react';

export default function Projects() {
  // Placeholder project data
  const projects = [
    {
      title: "Project Alpha",
      description: "A machine learning project that classifies existential questions into humor categories.",
      link: "#"
    },
    {
      title: "Project Beta",
      description: "A full-stack web app that visualizes philosophical quotes with stunning graphics.",
      link: "#"
    },
    {
      title: "Project Gamma",
      description: "An open-source library turning bleak novels into happy code snippets.",
      link: "#"
    }
  ]; // TODO: replace with your projects

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-serif mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <a href={proj.link} className="text-violet-400 hover:underline">Learn more &raquo;</a>
          </div>
        ))}
      </div>
    </div>
  );
}
