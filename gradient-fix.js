// gradient-fix.js - Script untuk memastikan gradient text dirender dengan benar

document.addEventListener('DOMContentLoaded', function() {
    // Function to fix gradient text rendering
    function fixGradientText() {
        const gradientElements = document.querySelectorAll('.text-gradient, .text-gradient-alt');
        
        gradientElements.forEach(element => {
            // Check if element exists and has content
            if (element && element.textContent) {
                // Store original content
                const originalContent = element.textContent;
                
                // Force re-render by temporarily hiding and showing
                element.style.opacity = '0';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 10);
                
                // Alternative method: Use innerHTML to ensure proper rendering
                if (originalContent.includes('<') || originalContent.includes('>')) {
                    // If content contains HTML tags as text, clean it up
                    const cleanContent = originalContent
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&amp;/g, '&')
                        .replace(/&quot;/g, '"')
                        .replace(/&#x27;/g, "'");
                    
                    // Check if it's actually HTML that should be rendered
                    if (cleanContent.includes('<span') && cleanContent.includes('</span>')) {
                        // Extract text content from HTML
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = cleanContent;
                        element.textContent = tempDiv.textContent || tempDiv.innerText || cleanContent;
                    }
                }
            }
        });
    }
    
    // Fix gradient text on page load
    fixGradientText();
    
    // Also fix after a short delay to handle any dynamic content
    setTimeout(fixGradientText, 500);
    
    // Fix gradient text when window is resized (sometimes helps with rendering issues)
    window.addEventListener('resize', fixGradientText);
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Theme switching
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        
        // Fix gradient text after theme change
        setTimeout(fixGradientText, 100);
    }
    
    // Initialize theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    
    // Theme toggle event listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add active class to navigation links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-primary-600', 'dark:text-primary-400');
            link.classList.add('text-secondary-700', 'dark:text-secondary-300');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-secondary-700', 'dark:text-secondary-300');
                link.classList.add('text-primary-600', 'dark:text-primary-400');
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
});

// Additional fallback for gradient text issues
window.addEventListener('load', function() {
    // Final check and fix for gradient text after everything is loaded
    setTimeout(() => {
        const gradientElements = document.querySelectorAll('.text-gradient, .text-gradient-alt');
        gradientElements.forEach(element => {
            if (element && element.textContent) {
                // Ensure the element has the proper CSS classes
                if (!element.style.background && !element.style.backgroundImage) {
                    element.style.background = 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)';
                    element.style.webkitBackgroundClip = 'text';
                    element.style.webkitTextFillColor = 'transparent';
                    element.style.backgroundClip = 'text';
                }
            }
        });
    }, 1000);
});

