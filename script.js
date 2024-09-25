// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  // Scroll animation to reveal skills
window.addEventListener('scroll', function () {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      const skillPosition = skill.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (skillPosition < screenHeight - 50) {
        skill.style.transform = 'scale(1)';
        skill.style.opacity = '1';
      }
    });
  });
  
  // Filter Projects by Category
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const filter = this.getAttribute('data-filter');
    
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    this.classList.add('active');
    
    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});


  
  // Button animation on scroll
  window.addEventListener('scroll', function () {
    const button = document.querySelector('.animated-button');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) {
      button.style.transform = 'scale(1.2)';
    } else {
      button.style.transform = 'scale(1)';
    }
  });
  