import React, { useState, useEffect } from 'react';
import csbanner from './assets/csbanner.png'; // Make sure this path is correct
import courses from './assets/courses.png'
import welcome from './assets/welcome.jpg'
import coding from './assets/coding.png'
import gambar from './assets/gambar.jpeg'

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
  ]
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection currentSlide={currentSlide} slides={slides} />
      <ContentSections />
    </div>
  );
};

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
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </nav>
      <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition">
        Sign Up
      </button>
    </div>
  </header>
);

const HeroSection = ({ currentSlide, slides }) => (
  <div className="relative h-screen">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-60"
      style={{
        backgroundImage: `url(${welcome}), linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255))`,
        opacity: 0.2, // Set opacity to 20% for the background
      }} 
    ></div>
    <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10">
      <div>
        <h1 className="text-4xl mb-4">{slides[currentSlide].headline}</h1>
        <p className="mb-6">{slides[currentSlide].subtext}</p>
        <button className="bg-blue-600 py-3 px-8 rounded-full">{slides[currentSlide].cta}</button>
      </div>
    </div>
    <div className="absolute bottom-4 w-full text-center text-white">
      <p>Slide {currentSlide + 1} of {slides.length}</p>
    </div>
  </div>
);


const ContentSections = () => (
  <main>
    <section id="about" className="py-16 text-white relative">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-20 brightness-125"
    style={{ backgroundImage: `url(${coding})` }}
  ></div>

  {/* Content Container */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
    <h2 className="text-3xl font-semibold mb-6">About Us</h2>
    <p className="text-lg mb-6">
      At Codecademy, we believe that education should be accessible to everyone, no matter where they are in the world. We work towards giving people the opportunity to learn the skills necessary for success in the modern world. Whether you're just starting out or looking to advance your career, Codecademy provides an interactive and engaging learning experience designed to help you achieve your goals.
      <br /><br />
      Our platform is built on the belief that learning should be fun, accessible, and impactful. Through hands-on coding exercises, real-world projects, and a vibrant community, we empower learners to not only understand theory but to also apply their skills in practical, real-life scenarios.
      <br /><br />
      We offer a wide range of courses in areas like web development, data science, machine learning, and more, designed to cater to learners at all levels. Whether you're pursuing a career change or enhancing your current skills, our flexible, interactive platform gives you the freedom to learn at your own pace, wherever and whenever it’s convenient for you.
      <br /><br />
      At Codecademy, we’re more than just a learning platform—we're a global community of learners, educators, and professionals who share a passion for technology and education. Join us today, and start your journey towards mastering the skills that will shape the future.
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
