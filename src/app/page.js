"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('section').forEach((section, index) => {
      const dir = index % 2 === 0 ? 100 : -100;
      gsap.fromTo(section, 
        { autoAlpha: 0, x: dir }, 
        {
          duration: 1.5, 
          autoAlpha: 1, 
          x: 0,
          ease: 'none', 
          scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
            markers: false, 
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white text-black"> {/* Tailwind CSS classes for background and text color */}
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center p-5">
        <section className="min-h-screen flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p>
            I am a web developer with a passion for building beautiful and functional websites and applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences. My journey began with simple HTML and CSS websites, and has since expanded to include complex applications built with React, Next.js, and Node.js. I am constantly learning new technologies and techniques to enhance my skills and keep up with the fast-paced world of web development. In my spare time, I contribute to open-source projects, explore the latest in web technologies, and share my knowledge with the community through blogging.
          </p>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p>
            My project portfolio showcases a range of applications, from interactive web apps to static websites. Highlights include a real-time chat application, an e-commerce site with a custom CMS, and a portfolio site designed to showcase my development and design skills. Each project presented unique challenges, from optimizing performance to ensuring user-friendly interfaces, and I leveraged a variety of technologies including React, Redux, Node.js, MongoDB, and Firebase to address these challenges.
          </p>
          <ul className="list-disc text-left max-w-2xl mx-auto mt-4">
            <li>A dynamic social media platform enabling real-time interactions.</li>
            <li>An e-commerce website with personalized shopping experiences.</li>
            <li>A project management tool with collaborative features for teams.</li>
          </ul>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p>
            Interested in collaborating on a project or learning more about my work? Feel free to get in touch. Whether you have a question, a project proposal, or just want to say hi, I'm always open to new opportunities and connections. Reach out via email at contact@example.com, or connect with me on LinkedIn and GitHub. Let's create something great together.
          </p>
          {/* Placeholder for contact form or additional details */}
        </section>
      </main>
    </div>
  );
};

export default Home;
