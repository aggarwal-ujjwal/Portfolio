import React from 'react';

export default function About() {
  // List your skills here
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Machine Learning",
    "TensorFlow",
    "Data Science"
  ]; // TODO: replace with your actual skills

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-serif mb-2">About Me</h2>
      <p className="text-gray-300 mb-4">
        A software engineer who enjoys pondering life’s absurdities through code. As Nietzsche warned, "He who fights with monsters should take care lest he thereby become a monster":contentReference[oaicite:13]{index=13} – for me, those monsters are bugs in the code. I prefer to write code that’s clean, logical, and maybe a little witty.
      </p>
      <h3 className="text-2xl font-serif mb-2">Skills</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
