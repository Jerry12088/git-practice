// script.js - Interactive features for Corona Pandemic Story

document.addEventListener('DOMContentLoaded', () => {

    // 1. Fade-in chapters when they scroll into view
    const chapters = document.querySelectorAll('.chapter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    chapters.forEach(chapter => {
        observer.observe(chapter);
    });


    // 2. Highlight chapter when clicking the date
    document.querySelectorAll('.date').forEach(date => {
        date.addEventListener('click', () => {
            const chapter = date.closest('.chapter');
            chapter.classList.add('highlight-click');
            
            // Remove highlight after 2 seconds
            setTimeout(() => {
                chapter.classList.remove('highlight-click');
            }, 2000);
        });
    });


    // 3. Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑ Top';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // 4. Optional dark/light mode toggle (adds a button in top-right)
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '☀️ / 🌙';
    toggleBtn.className = 'theme-toggle';
    toggleBtn.title = 'Toggle dark/light mode';
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        // Save preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});
