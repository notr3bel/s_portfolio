import React from 'react';
import { Menu, X, Play, Youtube, Timer as Vimeo, Instagram, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "College Reel",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.instagram.com/shashii._.reddy/reel/DHsVJqqyGCN/",
      category: "College"
    },
    {
      title: "Potluck",
      thumbnail: "https://media.gettyimages.com/id/1440077186/video/top-down-shot-of-people-passing-plates-and-serving-food-at-friendsgiving-dinner.jpg?s=640x640&k=20&c=5AaZ5IeCP_w-YuzmI0yXl8bArSA1hlwoQJiZnK5NKmY=",
      videoUrl: "https://drive.google.com/file/d/102rRYULYsErjJ3_JvwqbMJ8oIFalgjbo/view",
      category: "College"
    },
    {
      title: "1st Year",
      thumbnail: "https://st.depositphotos.com/1372276/2539/i/450/depositphotos_25399091-stock-photo-young-man-doing-homework-and.jpg",
      videoUrl: "https://drive.google.com/file/d/107Ynx2kXDOmElp1DCT6H2dRdbok4BN7E/view",
      category: "College"
    },
    {
      title: "Swayam-Fest",
      thumbnail: "https://dgu.ac/thumb/1400x560/images/header-images/life-at-dgu/college-fest/4.jpg",
      videoUrl: "https://drive.google.com/file/d/108NpIQ_P9YrylgTHc-pfqB3qQa9xRlK0/view",
      category: "College"
    },
    {
      title: "Bike Shoot",
      thumbnail: "https://imgd.aeplcdn.com/600x337/bw/ec/39760/2019-BikeWale-TrackDay-Royal-Enfield-Continental-GT-650-156008.jpg?wm=2&q=75",
      videoUrl: "https://drive.google.com/file/d/1-HnZ0lNGrIgs-8CHh3xQck282-Irp74C/view?usp=drivesdk",
      category: "Automobile"
    },
    {
      title: "Mysore",
      thumbnail: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241130-237756404-1732944745.jpg",
      videoUrl: "https://drive.google.com/file/d/1-ZupMZVvxE7VtmUVSJrjcGukuO1r1Jvw/view?usp=drivesdk",
      category: "Historical Video"
    },
     {
      title: "Tirupati",
      thumbnail: "https://tirupatibalajitravels.co.in/wp-content/uploads/2024/01/balaji-temple-1.webp",
      videoUrl: "https://drive.google.com/file/d/10W35HeJRKqEG-5FBrSgfXdmrI-vRgNec/view?usp=drivesdk",
      category: "Historical Video"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Shashikanth</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#portfolio" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                <a href="#contact" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-400 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#portfolio" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
              <a href="#contact" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shashikanth</h1>
          <p className="text-xl md:text-2xl mb-8">Professional Video Editor & Motion Designer</p>
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            View My Work
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                Hi, I'm Shashikanth, a passionate video editor with over 1 year of experience. I specialize in creating compelling visual narratives that captivate audiences and deliver powerful messages. My expertise spans videography, Cinematography and music video editing.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Technical Skills</h3>
                  <ul className="space-y-2">
                    <li>• Adobe Premiere Pro CC</li>
                    <li>• Adobe Photoshop</li>
                    <li>• Capcut</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Creative Skills</h3>
                  <ul className="space-y-2">
                    <li>• Color Grading</li>
                    <li>• Sound Design</li>
                    <li>• Visual Effects</li>
                    <li>• Storytelling</li>
                    <li>• Cinematography</li>
                    <li>• Motion Graphics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.category}</p>
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out through social media or email. I'm always interested in new projects and collaborations.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400">
                  <Youtube className="w-6 h-6" />
                  <span>YouTube</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400">
                  <Vimeo className="w-6 h-6" />
                  <span>Vimeo</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400">
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>
                <a href="mailto:contact@example.com" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400">
                  <Mail className="w-6 h-6" />
                  <span>contact@example.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
