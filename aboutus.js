document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const logoImg = document.querySelector('.logo-img');
    const logoText = document.querySelector('.logo-text');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(20, 83, 45, 0.95)';
            navbar.style.padding = '0.8rem 0';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
            logoImg.style.height = '35px';
            logoText.style.fontSize = '1.5rem';
            logoText.style.color = 'white';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
            logoImg.style.height = '40px';
            logoText.style.fontSize = '1.8rem';
            logoText.style.color = 'var(--green-dark)';
        }
    });

// Book Opening Animation
const bookCover = document.getElementById('book-cover-container');
const bookPages = document.getElementById('book-pages-container');
const closeBookBtn = document.getElementById('close-book-btn');

bookCover.addEventListener('click', function() {
    // Add page-turn animation class
    bookCover.style.transformOrigin = 'left center';
    bookCover.style.animation = 'pageTurn 0.8s ease forwards';
    
    // After animation completes, show pages
    setTimeout(() => {
        bookCover.style.display = 'none';
        bookPages.style.display = 'flex';
        bookPages.style.animation = 'bookReveal 0.5s ease forwards';
    }, 800);
});

closeBookBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    bookPages.style.animation = 'bookHide 0.5s ease forwards';
    
    setTimeout(() => {
        bookPages.style.display = 'none';
        bookCover.style.display = 'block';
        bookCover.style.animation = 'pageReturn 0.8s ease forwards';
        
        // Reset after return animation
        setTimeout(() => {
            bookCover.style.animation = '';
        }, 800);
    }, 500);
});

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Scroll Animations
    const animatedElements = document.querySelectorAll('.dua-content, .disclaimer-container, .section-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => observer.observe(element));

    // Smooth scroll to contact section
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.nav-btn, .cta-btn, .close-book-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Social link animations
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});