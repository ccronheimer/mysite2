import Image from 'next/image'
import { Inter } from 'next/font/google'

const projects = [
  {
    name: 'OSAP Interest Calculator',
    description: 'A calculator to determine the interest accumulation on your OSAP loan.',
    link: 'https://www.osapinterest.ca/'
  },
  {
    name: 'Rolling Acres Golf Club',
    description: 'A 1 to 1 of Rolling Acres Golf Club built for GSPRO golf simulators.',
    link: 'https://www.youtube.com/watch?v=8ACFHaqFfXw'
  },
  {
    name: 'Codemates',
    description: 'Live collaborative code editor.',
    link: 'https://github.com/ccronheimer/codemates'
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20">
        <h1 className="font-semibold text-2xl">Cameron Cronheimer</h1>
        <p className="text-gray-500 mb-4">Software Engineer</p>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/cameron-cronheimer-ab3a47165/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>

          <a href="https://github.com/ccronheimer" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>

          <a href="mailto:cameroncronheimer@gmail.com" className="text-blue-600 underline">Email</a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a href={project.link} key={project.name}>
            <div className="border p-4 rounded-md transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer">
              <h2 className="font-semibold">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};