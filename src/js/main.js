// Portfolio Website JavaScript
// Author: Portfolio Owner
// Description: Main JavaScript file for portfolio website interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeDarkMode();
    initializeScrollEffects();
    initializeContactForm();
    initializeAnimations();
    
    console.log('Portfolio website initialized successfully!');
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuButton) {
                    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuButton) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('text-primary-600', 'dark:text-primary-400');
                    link.classList.add('text-secondary-700', 'dark:text-secondary-300');
                });
                
                // Add active class to current section nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-secondary-700', 'dark:text-secondary-300');
                    activeLink.classList.add('text-primary-600', 'dark:text-primary-400');
                }
            }
        });
    });
}

// ===== DARK MODE =====
function initializeDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Theme toggle function
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        
        // Add smooth transition effect
        document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    }
    
    // Add event listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Header background on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('bg-white/95', 'dark:bg-secondary-900/95');
                header.classList.remove('bg-white/80', 'dark:bg-secondary-900/80');
            } else {
                header.classList.remove('bg-white/95', 'dark:bg-secondary-900/95');
                header.classList.add('bg-white/80', 'dark:bg-secondary-900/80');
            }
        });
    }
    
    // Parallax effect for hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animation for cards
                if (entry.target.classList.contains('card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-slide-up');
                        }, index * 100);
                    });
                }
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('[style*="width"]');
                    if (progressBar) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.width = width;
                            progressBar.style.transition = 'width 1s ease-in-out';
                        }, 200);
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .skill-item, section');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Typing animation for hero text
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('form-message');
            
            // Clear previous errors
            clearFormErrors();
            
            // Validate form
            let isValid = true;
            
            if (!nameField.value.trim()) {
                showFieldError(nameField, 'Nama lengkap harus diisi');
                isValid = false;
            }
            
            if (!emailField.value.trim()) {
                showFieldError(emailField, 'Email harus diisi');
                isValid = false;
            } else if (!isValidEmail(emailField.value)) {
                showFieldError(emailField, 'Format email tidak valid');
                isValid = false;
            }
            
            if (!subjectField.value.trim()) {
                showFieldError(subjectField, 'Subjek harus diisi');
                isValid = false;
            }
            
            if (!messageField.value.trim()) {
                showFieldError(messageField, 'Pesan harus diisi');
                isValid = false;
            } else if (messageField.value.trim().length < 10) {
                showFieldError(messageField, 'Pesan minimal 10 karakter');
                isValid = false;
            }
            
            if (isValid) {
                // Show loading state
                submitButton.disabled = true;
                submitButton.querySelector('.submit-text').classList.add('hidden');
                submitButton.querySelector('.loading-text').classList.remove('hidden');
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset button state
                    submitButton.disabled = false;
                    submitButton.querySelector('.submit-text').classList.remove('hidden');
                    submitButton.querySelector('.loading-text').classList.add('hidden');
                    
                    // Show success message
                    showFormMessage('Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda kembali.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                }, 2000);
            }
        });
        
        // Real-time validation
        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                // Clear error when user starts typing
                const errorElement = this.parentElement.querySelector('.error-message');
                if (errorElement && !errorElement.classList.contains('hidden')) {
                    errorElement.classList.add('hidden');
                    this.classList.remove('border-red-500');
                    this.classList.add('border-secondary-300', 'dark:border-secondary-600');
                }
            });
        });
    }
}

// Form validation helper functions
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch (field.type) {
        case 'email':
            if (!value) {
                errorMessage = 'Email harus diisi';
                isValid = false;
            } else if (!isValidEmail(value)) {
                errorMessage = 'Format email tidak valid';
                isValid = false;
            }
            break;
        case 'text':
            if (!value) {
                errorMessage = `${field.previousElementSibling.textContent} harus diisi`;
                isValid = false;
            }
            break;
        default:
            if (field.tagName === 'TEXTAREA') {
                if (!value) {
                    errorMessage = 'Pesan harus diisi';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = 'Pesan minimal 10 karakter';
                    isValid = false;
                }
            }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        field.classList.add('border-red-500');
        field.classList.remove('border-secondary-300', 'dark:border-secondary-600');
    }
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    errorElements.forEach(element => {
        element.classList.add('hidden');
    });
    
    formFields.forEach(field => {
        field.classList.remove('border-red-500');
        field.classList.add('border-secondary-300', 'dark:border-secondary-600');
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.classList.remove('hidden');
        
        if (type === 'success') {
            formMessage.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-200');
            formMessage.classList.remove('bg-red-100', 'text-red-800', 'border-red-200');
        } else {
            formMessage.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-200');
            formMessage.classList.remove('bg-green-100', 'text-green-800', 'border-green-200');
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add optimized scroll listener
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects are handled here
}, 16)); // ~60fps

// ===== PERFORMANCE OPTIMIZATIONS =====

// Lazy loading for images (if any are added later)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initializeLazyLoading();

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// ===== ACCESSIBILITY IMPROVEMENTS =====

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuButton) {
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuButton.focus();
            }
        }
    }
});

// Focus management for better accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="email"], select'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('ring-2', 'ring-primary-500', 'ring-offset-2');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('ring-2', 'ring-primary-500', 'ring-offset-2');
        });
    });
}

// Initialize focus management
manageFocus();

console.log('Portfolio JavaScript loaded successfully! 🚀');

