document.addEventListener('DOMContentLoaded', function() {
    // Unmute Video Button
    const unmuteBtn = document.getElementById('unmute-btn');
    const video = document.getElementById('imam-video');
    
    unmuteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        const icon = this.querySelector('i');
        const text = this.querySelector('span');
        
        if (video.muted) {
            icon.className = 'fas fa-volume-mute';
            text.textContent = 'Unmute';
        } else {
            icon.className = 'fas fa-volume-up';
            text.textContent = 'Mute';
        }
    });

    // Trending Book Animation
    const bookAnimation = document.getElementById('book-animation');
    const bookCover = document.getElementById('book-cover');
    
    bookAnimation.addEventListener('ended', function() {
        // Show flash effect
        const flash = document.createElement('div');
        flash.style.position = 'absolute';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = 'white';
        flash.style.opacity = '0';
        flash.style.transition = 'opacity 0.3s';
        bookAnimation.parentNode.appendChild(flash);
        
        // Flash animation
        setTimeout(() => {
            flash.style.opacity = '1';
            setTimeout(() => {
                flash.style.opacity = '0';
                bookCover.classList.add('show');
                setTimeout(() => {
                    flash.remove();
                }, 300);
            }, 200);
        }, 50);
    });

    // Scroll Animations
    const storyTexts = document.querySelectorAll('.story-text');
    const hadithContent = document.querySelector('.hadith-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    storyTexts.forEach(text => observer.observe(text));
    observer.observe(hadithContent);

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

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.nav-btn, .cta-btn, .btn-read, .btn-unmute');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Footer animations
    const disclaimerContainer = document.querySelector('.disclaimer-container');
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    footerObserver.observe(disclaimerContainer);
    
    // Smooth scroll to footer when contact button is clicked
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('footer').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Enhanced social link animations
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
    
    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // About button navigation
    const aboutBtn = document.querySelector('.about-btn');
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'aboutus.html';
    });
});