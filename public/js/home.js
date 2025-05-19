// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    // Add reveal class to columns
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.classList.add('reveal');
    });

    // Add reveal class to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('reveal');
    });

    // Initial check for elements in view
    reveal();
});

// Listen for scroll events
window.addEventListener('scroll', reveal);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Nav collapse button animation
const navButton = document.querySelector('#nav-collapse-button');
const navView = document.querySelector('#nav-collapse-view');

if (navButton && navView) {
    navButton.addEventListener('click', () => {
        navView.classList.toggle('active');
        navButton.classList.toggle('active');
    });
}

// Language switcher animation
const languageButtons = document.querySelectorAll('.languages .lang');
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        languageButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Add hover effect to social icons
const socialIcons = document.querySelectorAll('.socials a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});
