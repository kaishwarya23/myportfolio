// Function to toggle the mobile menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

// Function to close the mobile menu
function closeMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.remove('active');
}

// Function to toggle the theme (dark/light)
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  // Save theme preference to localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Function to check scroll position for header effects
function checkScroll() {
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    backToTop.classList.add('show');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('show');
  }
}

// Function to scroll back to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function for typing animation
function typeWriterEffect(element, text, i = 0, speed = 100) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(() => typeWriterEffect(element, text, i, speed), speed);
  }
}

// Function to animate elements as they enter the viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('.experience-card, .timeline-card, .cert-card, .project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Function to create background particle effect
function createParticles() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    if (index % 2 === 0) return; // Only add to alternate sections
    
    // Create particles
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.classList.add('shape');
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.width = `${20 + Math.random() * 30}px`;
      particle.style.height = `${20 + Math.random() * 30}px`;
      particle.style.opacity = `${0.1 + Math.random() * 0.1}`;
      particle.style.animationDuration = `${5 + Math.random() * 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.borderRadius = '50%';
      
      // Random color
      const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation
      const animations = ['float', 'pulse', 'morph'];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      particle.style.animation = `${animation} ${5 + Math.random() * 5}s infinite alternate`;
      
      section.appendChild(particle);
    }
  });
}

// Function to handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('form-message');
  
  // Simple validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.className = 'form-message error';
    return;
  }
  
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'form-message error';
    return;
  }
  
  // Simulate form submission
  formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
  formMessage.className = 'form-message success';
  
  // Reset form
  document.getElementById('contact-form').reset();
  
  // Clear success message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }, 5000);
}

// Initialize all event listeners and page setup
function init() {
  // Set the current year in the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
  
  // Start typing animation for name
  const typingElement = document.getElementById('typing-name');
  if (typingElement) {
    const fullText = typingElement.textContent;
    typingElement.textContent = '';
    setTimeout(() => {
      typeWriterEffect(typingElement, fullText, 0, 80);
    }, 500);
  }
  
  // Initialize animations
  animateOnScroll();
  createParticles();
  
  // Add event listeners with improved mobile support
  document.querySelector('.menu-toggle').addEventListener('click', toggleMobileMenu);
  
  // Close menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
  
  // Handle touch events for mobile
  document.addEventListener('touchstart', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  }, {passive: true});
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('back-to-top').addEventListener('click', scrollToTop);
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
  
  // Check scroll on page load
  checkScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', checkScroll);
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);