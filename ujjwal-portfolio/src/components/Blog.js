import React from 'react';

export default function Blog() {
  // Example blog posts
  const posts = [
    {
      title: "The Algorithm of Absurdity",
      content: "Exploring how Kafkaesque scenarios mirror bugs in our code. A humorous take on the absurdity of modern software development."
    }
  ]; // TODO: add your blog posts here

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-serif mb-6">Blog</h2>
      {posts.map((post, idx) => (
        <article key={idx} className="mb-8">
          <h3 className="text-2xl mb-2">{post.title}</h3>
          <p className="text-gray-300">{post.content}</p>
          {/* Placeholder date or read more link */}
        </article>
      ))}
    </div>
  );
}
