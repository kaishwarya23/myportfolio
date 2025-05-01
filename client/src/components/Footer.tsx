const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Kothagadi Aishwarya. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#education" className="hover:text-primary transition-colors">Education</a>
          <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
