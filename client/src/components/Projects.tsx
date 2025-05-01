import { PROJECT_DATA } from "@/lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-background dark:bg-gray-900 px-4 relative z-10">Projects</span>
          <span className="absolute h-1 w-20 bg-primary left-1/2 transform -translate-x-1/2 bottom-0"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_DATA.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <i className={`${project.icon} text-white text-5xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900/30 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
