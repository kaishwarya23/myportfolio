import { EDUCATION_DATA } from "@/lib/constants";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-background dark:bg-gray-900 px-4 relative z-10">Education</span>
          <span className="absolute h-1 w-20 bg-primary left-1/2 transform -translate-x-1/2 bottom-0"></span>
        </h2>
        
        <div className="timeline-container relative max-w-4xl mx-auto">
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.id} className="timeline-item mb-16 md:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-8 lg:pr-16 md:text-right mb-8 md:mb-0 order-2 md:order-1">
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 card-hover">
                        <h3 className="text-xl font-bold text-primary mb-2">{item.institution}</h3>
                        <p className="text-lg mb-1">{item.degree}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.period}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 lg:pl-16 order-1 md:order-2 flex justify-center md:justify-start">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                        <i className={`${item.icon} text-primary text-xl`}></i>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pl-8 lg:pl-16 order-2">
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 card-hover">
                        <h3 className="text-xl font-bold text-primary mb-2">{item.institution}</h3>
                        <p className="text-lg mb-1">{item.degree}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.period}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pr-8 lg:pr-16 md:text-right mb-8 md:mb-0 order-1 flex justify-center md:justify-end">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                        <i className={`${item.icon} text-primary text-xl`}></i>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
