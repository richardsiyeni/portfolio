import { useState } from 'react'; // Import useState
import richardImage from './richard.png'; // Importing your image
import htmlCssImage from './htmlcss.png'; // Importing the new screenshot

export default function App() {
  const [activeSection, setActiveSection] = useState('about-me'); // Default to 'about-me'

  // Function to scroll to a section slowly and update active section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Update active section
    const section = document.getElementById(sectionId);
    if (section) {
      const start = window.scrollY;
      const end = section.getBoundingClientRect().top + window.scrollY - 64; // Offset for nav height
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress); // Ease-in-out

        window.scrollTo({
          top: start + (end - start) * ease,
          behavior: 'auto',
        });

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar - Sticky */}
      <nav className="bg-black border-b border-gray-800 sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href="#about-me"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about-me');
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'about-me'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  About Me
                </a>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'skills'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'projects'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about-me');
              }}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'about-me'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'skills'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'projects'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section id="about-me" className="p-6 max-w-3xl mx-auto text-center">
        <img
          src={richardImage}
          alt="Richard's Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">Richard Siyeni</h2>
        <div className="text-gray-300 mb-4">
          <p>Phone: <a href="tel:+265991218421" className="text-blue-400 hover:underline">+265 991 218 421</a></p>
          <p>WhatsApp: <a href="https://wa.me/265991218421" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+265 991 218 421</a></p>
          <p>Email: <a href="mailto:richardsiyeni8@gmail.com" className="text-blue-400 hover:underline">richardsiyeni8@gmail.com</a></p>
        </div>
        <p className="text-gray-300 mb-4">
          Hi, I'm a self-taught software developer from Malawi with a deep curiosity for how things work under the hood. I spend most of my free time building and breaking small projects just to see what I can learn along the way. I use tools like ChatGPT to solve problems and refactor ideas into real working apps faster. I have hands-on experience working with JavaScript, React, a bit of Vue, and I'm currently getting more comfortable with Tailwind CSS. I have a real hunger to get better every day. My goal right now is simple: to keep building, keep learning, and hopefully work alongside people who enjoy the process as much as I do.
        </p>
        <p className="text-gray-300">
          I’ve also spent some time learning the fundamentals of APIs—how they work, how to use them, and how to build simple ones. I understand how REST APIs are structured, how to send requests, handle responses, and make sure they work smoothly with frontend apps. I’ve played around with tools like Postman to test API endpoints and get a better feel for how frontend and backend systems talk to each other.
        </p>
      </section>
      <section id="skills" className="p-6 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {/* CSS */}
          <div>
            <p className="text-gray-300 mb-1">CSS - 100%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
            </div>
          </div>
          {/* HTML */}
          <div>
            <p className="text-gray-300 mb-1">HTML - 100%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
            </div>
          </div>
          {/* JavaScript */}
          <div>
            <p className="text-gray-300 mb-1">JavaScript - 40%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
            </div>
          </div>
          {/* C */}
          <div>
            <p className="text-gray-300 mb-1">C - 60%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
            </div>
          </div>
          {/* Tailwind CSS */}
          <div>
            <p className="text-gray-300 mb-1">Tailwind CSS - 20%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-1/5"></div>
            </div>
          </div>
          {/* Vue.js */}
          <div>
            <p className="text-gray-300 mb-1">Vue.js - 10%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-1/10"></div>
            </div>
          </div>
          {/* React.js */}
          <div>
            <p className="text-gray-300 mb-1">React.js - 30%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/10"></div>
            </div>
          </div>
          {/* API Fundamentals */}
          <div>
            <p className="text-gray-300 mb-1">API Fundamentals - 100%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
            </div>
          </div>
          {/* PHP */}
          <div>
            <p className="text-gray-300 mb-1">PHP - 70%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-7/10"></div>
            </div>
          </div>
          {/* MySQL */}
          <div>
            <p className="text-gray-300 mb-1">MySQL - 60%</p>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-300 mb-4">
          Most of my projects so far have been small experiments where I focused on building user interfaces using HTML and CSS. I’ve mainly been exploring how layouts work, playing with colors, and trying to make things look a bit more polished as I learn. These early projects helped me get comfortable with the basics of structuring pages and thinking about user experience, even in simple designs.
        </p>
        <p className="text-gray-300 mb-4">
          You can check out one of my CSS/HTML experiments here:<br />
          👉 <a href="https://twoway-prototype.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://twoway-prototype.vercel.app/</a>
        </p>
        <img
          src={htmlCssImage}
          alt="Screenshot of HTML/CSS Project"
          className="max-w-full h-auto mx-auto rounded-lg shadow-md"
        />
      </section>
    </div>
  );
}