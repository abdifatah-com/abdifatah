// script.js
if (window.innerWidth <= 768) {
    console.log("You're on a phone screen.");
}
// Event listener for scroll to track sections
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section"); // All sections to track
    const navLinks = document.querySelectorAll("nav a"); // Navigation links

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if current scroll position is within the section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id"); // Get the id of the active section
        }
    });

    // Loop through nav links to apply active class based on current section
    navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active class from all links
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active"); // Add active class to the current section link
        }
    });
});

// JavaScript to hide header on scroll down and show on scroll up
let lastScrollTop = 0;
const header = document.querySelector("header"); // Make sure "header" matches your header element

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide header
        header.style.top = "-100px"; // Adjust based on your header height
    } else {
        // Scrolling up - show header
        header.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});
// Select all sections you want to animate
const sections = document.querySelectorAll('.section');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Check if section is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class to trigger animation
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    threshold: 0.2 // Adjusts when to trigger animation (0.2 = 20% in view)
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// cookie section 
// Check if cookies have already been accepted
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block'; // Show the banner
}

// Handle the button click
document.getElementById('accept-cookies').onclick = function() {
    localStorage.setItem('cookiesAccepted', 'true'); // Store acceptance in localStorage
    document.getElementById('cookie-banner').style.display = 'none'; // Hide the banner
};
// mobile nav 
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active'); // Toggle class to show/hide
}

// Smooth scroll to section and hide menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        // Hide the menu
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('nav-active'); // Hide the menu on link click

        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


