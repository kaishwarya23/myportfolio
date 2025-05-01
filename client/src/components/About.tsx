const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gray-50 dark:bg-gray-900 px-4 relative z-10">About Me</span>
          <span className="absolute h-1 w-20 bg-primary left-1/2 transform -translate-x-1/2 bottom-0"></span>
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Hello! I'm Aishwarya, a Computer Science undergrad specializing in Artificial Intelligence and Machine Learning. With a passion for solving real-world problems using emerging technologies, I've pursued multiple certifications and hands-on projects in AI, ML, and software development.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in continuous learning and innovation, and I'm actively seeking opportunities to grow and contribute in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
