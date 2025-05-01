// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const backToTopButton = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const currentYearSpan = document.getElementById('current-year');

// Functions
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
}

function toggleTheme() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
}

function checkScroll() {
  // For header shadow
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // For back to top button
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  // Simulating form submission
  console.log('Form submitted:', formData);
  
  // Show success message
  formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
  formMessage.classList.add('success');
  
  // Reset form
  contactForm.reset();
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = '';
    formMessage.classList.remove('success');
  }, 5000);
}

// Initialize
function init() {
  // Set current year in the footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Set theme based on user preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
  
  // Event Listeners
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  themeToggle.addEventListener('click', toggleTheme);
  
  window.addEventListener('scroll', checkScroll);
  
  backToTopButton.addEventListener('click', scrollToTop);
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Initial check for scroll position
  checkScroll();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);