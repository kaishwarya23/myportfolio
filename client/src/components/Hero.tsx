import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <div className="rounded-full w-48 h-48 mx-auto lg:mx-0 overflow-hidden border-4 border-primary mb-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Professional headshot placeholder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Kothagadi</span> <span className="text-secondary">Aishwarya</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Aspiring AI/ML Engineer | Tech Enthusiast | Passionate Learner
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center lg:justify-start">
              <Button className="bg-primary hover:bg-primary/90 text-white inline-flex items-center justify-center">
                <i className="fas fa-download mr-2"></i> Download Resume
              </Button>
              <Button variant="outline" className="bg-background dark:bg-gray-800 border border-primary text-primary hover:bg-gray-50 dark:hover:bg-gray-700 inline-flex items-center justify-center">
                <i className="fas fa-envelope mr-2"></i> 
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
