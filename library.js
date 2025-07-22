document.addEventListener('DOMContentLoaded', function() {
    // Sample book data - this will be replaced with data from your database
    const sampleBooks = [
        {
            id: 1,
            title: "The Awaited Savior",
            cover: "assets/images/covers/the-awaited-savior.jpg",
            pdf: "books/the-awaited-savior.pdf"
        },
        {
            id: 2,
            title: "Imam Mahdi: The Guided One",
            cover: "assets/images/covers/imam-mahdi.jpg",
            pdf: "books/imam-mahdi.pdf"
        },
        {
            id: 3,
            title: "The Occultation of Imam Mahdi",
            cover: "assets/images/covers/occultation.jpg",
            pdf: "books/occultation.pdf"
        },
        {
            id: 4,
            title: "Signs of Reappearance",
            cover: "assets/images/covers/signs.jpg",
            pdf: "books/signs.pdf"
        },
        {
            id: 5,
            title: "The Divine Promise",
            cover: "assets/images/covers/promise.jpg",
            pdf: "books/promise.pdf"
        },
        {
            id: 6,
            title: "The Just Rule of Imam Mahdi",
            cover: "assets/images/covers/just-rule.jpg",
            pdf: "books/just-rule.pdf"
        }
    ];

    // Function to render books
    function renderBooks(books) {
        const container = document.getElementById('books-container');
        container.innerHTML = '';
        
        books.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.style.animationDelay = `${index * 0.1}s`;
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                    <div class="book-overlay">
                        <span class="hover-text">Click to Open</span>
                    </div>
                </div>
                <div class="book-title">${book.title}</div>
            `;
            
            // Add click event to open PDF
            bookCard.addEventListener('click', function() {
                window.open(book.pdf, '_blank');
            });
            
            container.appendChild(bookCard);
        });
    }

    // Initial render with sample data
    renderBooks(sampleBooks);

    // Simulate loading more books (in a real app, this would fetch from your database)
    const loadingElement = document.querySelector('.loading-animation');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Simulate loading delay
            setTimeout(() => {
                // In a real app, you would fetch more books from your database here
                // For now, we'll just duplicate the sample books to simulate loading more
                const moreBooks = [...sampleBooks, ...sampleBooks.map(book => ({
                    ...book,
                    id: book.id + 10
                }))];
                renderBooks(moreBooks);
                loadingElement.style.display = 'none';
            }, 1500);
        }
    }, { threshold: 0.1 });

    observer.observe(loadingElement);

    // Navbar scroll effect (same as in imam.js)
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

    // Contact button scroll to footer
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('footer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});