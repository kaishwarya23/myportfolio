import { useScrollPosition } from "@/hooks/useScrollPosition";

const BackToTop = () => {
  const scrollPosition = useScrollPosition();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <button 
      className={`fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg ${scrollPosition > 300 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
