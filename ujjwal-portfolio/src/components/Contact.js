import React from 'react';

export default function Contact() {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-3xl font-serif mb-6">Contact</h2>
      <p className="text-gray-300">
        Feel free to reach out for collaborations or discussions about code and philosophy.
      </p>
      <ul className="mt-4 text-gray-300 space-y-1">
        <li>Email: <a href="mailto:you@example.com" className="text-violet-400">you@example.com</a></li>
        <li>GitHub: <a href="#" className="text-violet-400">@YourGitHub</a></li>
        <li>LinkedIn: <a href="#" className="text-violet-400">@YourLinkedIn</a></li>
      </ul>
    </div>
  );
}
