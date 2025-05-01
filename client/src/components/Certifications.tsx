import { CERTIFICATION_DATA } from "@/lib/constants";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gray-50 dark:bg-gray-900 px-4 relative z-10">Certifications</span>
          <span className="absolute h-1 w-20 bg-primary left-1/2 transform -translate-x-1/2 bottom-0"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATION_DATA.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <i className={`${cert.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{cert.organization}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
