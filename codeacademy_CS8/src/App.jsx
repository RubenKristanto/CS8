import React, { useState, useEffect } from 'react';
import csbanner from './assets/csbanner.png';
import welcome from './assets/welcome.jpg';
import coding from './assets/coding.png';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      headline: "Welcome to Codecademy",
      subtext: "Join the best platform to learn coding through fun and interactive lessons.",
      cta: "Get Started"
    },
    {
      headline: "Explore Our Courses",
      subtext: "Discover a wide range of coding skills that can help boost your career and confidence.",
      cta: "Browse Courses"
    },
    {
      headline: "Success Stories",
      subtext: "Millions of learners worldwide have transformed their lives with Codecademy.",
      cta: "Read Their Stories"
    },
    {
      headline: "Try It Free!",
      subtext: "Enjoy full access to premium courses for 7 days—no commitment needed.",
      cta: "Start Free Trial"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation handlers
  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="font-sans">
      <Header />
      <HeroSection 
        currentSlide={currentSlide} 
        slides={slides}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <ContentSections />
    </div>
  );
};
// Modified HeroSection to use the counter for slide navigation
const HeroSection = ({ currentSlide, slides, onNext, onPrev }) => (
  <div className="relative h-screen">
    {/* Background image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${welcome})`,
        opacity: 0.2,
      }} 
    ></div>

    {/* Slide Content */}
    <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10">
      <div>
        <h1 className="text-4xl mb-4">{slides[currentSlide].headline}</h1>
        <p className="mb-6">{slides[currentSlide].subtext}</p>
        <button className="bg-blue-600 py-3 px-8 rounded-full mb-8">{slides[currentSlide].cta}</button>
      </div>
    </div>

    {/* Navigation Buttons */}
    <div className="absolute bottom-6 w-full flex justify-center items-center space-x-6 text-white text-lg z-20">
      <button 
        onClick={onPrev}
        className="text-3xl hover:text-gray-300 px-4"
        aria-label="Previous Slide"
      >
        ←
      </button>
      <span>Slide {currentSlide + 1} of {slides.length}</span>
      <button 
        onClick={onNext}
        className="text-3xl hover:text-gray-300 px-4"
        aria-label="Next Slide"
      >
        →
      </button>
    </div>
  </div>
);

// Rest of your components remain unchanged
const Header = () => (
  <header className="sticky top-0 w-full bg-blue-900 p-4 shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="w-48"> 
        <img 
          src={csbanner} 
          alt="Codecademy Logo" 
          className="w-full h-auto object-contain"
        />
      </div>
      <nav className="hidden md:flex space-x-8 text-white">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#courses" className="hover:text-gray-300">Courses</a>
        <a href="#RubenKristanto" className="hover:text-gray-300">Ruben Kristanto</a>
      </nav>
      <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition">
        Sign Up
      </button>
    </div>
  </header>
);

const ContentSections = () => (
  <main>
    <section id="about" className="py-16 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 brightness-125"
        style={{ backgroundImage: `url(${coding})` }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg mb-6">
          At Codecademy, we believe that education should be accessible to everyone, no matter where they are in the world. We work towards giving people the opportunity to learn the skills necessary for success in the modern world. Whether you're just starting out or looking to advance your career, Codecademy provides an interactive and engaging learning experience designed to help you achieve your goals.
          <br /><br />
          Our platform is built on the belief that learning should be fun, accessible, and impactful. Through hands-on coding exercises, real-world projects, and a vibrant community, we empower learners to not only understand theory but to also apply their skills in practical, real-life scenarios.
          <br /><br />
          We offer a wide range of courses in areas like web development, data science, machine learning, and more, designed to cater to learners at all levels. Whether you're pursuing a career change or enhancing your current skills, our flexible, interactive platform gives you the freedom to learn at your own pace, wherever and whenever it's convenient for you.
          <br /><br />
          At Codecademy, we're more than just a learning platform—we're a global community of learners, educators, and professionals who share a passion for technology and education. Join us today, and start your journey towards mastering the skills that will shape the future.
        </p>
      </div>
    </section>
    <section id="courses" className="bg-gray-500 py-16">
      <h2 className="text-3xl font-semibold text-center mb-6 text-white">Top Courses</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {[
          {
            title: 'Pengembangan Web',
            description: 'Learn to build beautiful and functional websites using HTML, CSS, and JavaScript. Master both front-end and back-end development.'
          },
          {
            title: 'Ilmu Data',
            description: 'Dive into the world of data with Python, SQL, and data visualization. Learn how to analyze, interpret, and present data effectively.'
          },
          {
            title: 'Pengembangan Aplikasi',
            description: 'Develop powerful mobile and desktop applications. Understand software architecture and build apps using modern frameworks.'
          }
        ].map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full">Pelajari Lebih Lanjut</button>
          </div>
        ))}
      </div>
    </section>
    <section id="cta" className="bg-blue-900 py-16 text-center text-white">
      <h2 className="text-3xl font-semibold mb-6">Join us and start learning!</h2>
      <button className="bg-white text-blue-600 py-3 px-8 rounded-full">Sign up now!</button>
    </section>
  </main>
);

export default App;