// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-content', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

// Floating Shapes Animation
gsap.to('.shape-1', {
    duration: 6,
    x: 'random(-100, 100)',
    y: 'random(-100, 100)',
    rotation: 'random(-180, 180)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.shape-2', {
    duration: 8,
    x: 'random(-100, 100)',
    y: 'random(-100, 100)',
    rotation: 'random(-180, 180)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.shape-3', {
    duration: 10,
    x: 'random(-100, 100)',
    y: 'random(-100, 100)',
    rotation: 'random(-180, 180)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Button Hover Effects
const buttons = document.querySelectorAll('.btn, .submit-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mousedown', () => {
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseup', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.1,
            ease: 'power2.out'
        });
    });
});

// Section Animations
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Portfolio Items Animation
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Contact Form Animation
const contactForm = document.querySelector('.contact-form');

gsap.from(contactForm, {
    scrollTrigger: {
        trigger: contactForm,
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
            
            // Calculate offset for fixed header
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll to target
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const form = document.getElementById('contactForm');
const sendMessageBtn = document.getElementById('sendMessageBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create email body
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject Type: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:YOUR_EMAIL_HERE?subject=New Contact Form Submission&body=${emailBody}`;
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Opening your email client...</span>
    `;
    
    document.body.appendChild(successMessage);
    
    gsap.from(successMessage, {
        duration: 0.5,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        gsap.to(successMessage, {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: 'power3.in',
            onComplete: () => successMessage.remove()
        });
    }, 3000);
    
    // Reset form
    form.reset();
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mouse Trail Effect
const trail = document.createElement('div');
trail.className = 'mouse-trail';
document.body.appendChild(trail);

const trailElements = Array(10).fill().map(() => {
    const element = document.createElement('div');
    element.className = 'trail-element';
    trail.appendChild(element);
    return element;
});

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateTrail() {
    let x = mouseX;
    let y = mouseY;
    
    trailElements.forEach((element, index) => {
        const nextElement = trailElements[index + 1] || trailElements[0];
        
        x += (nextElement.offsetLeft - x) * 0.3;
        y += (nextElement.offsetTop - y) * 0.3;
        
        element.style.left = x + 'px';
        element.style.top = y + 'px';
    });
    
    requestAnimationFrame(updateTrail);
}

updateTrail(); 