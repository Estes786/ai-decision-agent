// Portfolio Website JavaScript

document.addEventListener("DOMContentLoaded", function() {
    // 1. Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
        });

        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener("click", function() {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // 2. Dark Mode Toggle
  // const themeToggle = document.getElementById("theme-toggle");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");

    // Function to set theme
    function setTheme(theme) {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }

    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    // Event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener("click", function() {
            if (document.documentElement.classList.contains("dark")) {
                setTheme("light");
            } else {
                setTheme("dark");
            }
        });
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener("click", function() {
            if (document.documentElement.classList.contains("dark")) {
                setTheme("light");
            } else {
                setTheme("dark");
            }
        });
    }
// 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
  // 4. Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;
            const formData = new FormData(contactForm);
            const formMessage = document.getElementById("form-message");
            const submitButton = contactForm.querySelector("button[type=\"submit\"]");
            const submitText = submitButton.querySelector(".submit-text");
            const loadingText = submitButton.querySelector(".loading-text");

            // Reset previous errors
            document.querySelectorAll(".error-message").forEach(el => {
                el.textContent = "";
                el.classList.add("hidden");
            });
            document.querySelectorAll("input, textarea").forEach(el => {
                el.classList.remove("border-red-500");
            });

            // Validate Name
            const nameInput = document.getElementById("name");
            if (nameInput && nameInput.value.trim() === "") {
                displayError(nameInput, "Nama tidak boleh kosong.");
                isValid = false;
            }

            // Validate Email
            const emailInput = document.getElementById("email");
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (emailInput && (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value))) {
                displayError(emailInput, "Email tidak valid.");
                isValid = false;
            }

            // Validate Subject
            const subjectInput = document.getElementById("subject");
            if (subjectInput && subjectInput.value.trim() === "") {
                displayError(subjectInput, "Subjek tidak boleh kosong.");
                isValid = false;
            }

            // Validate Message
            const messageInput = document.getElementById("message");
            if (messageInput && messageInput.value.trim() === "") {
                displayError(messageInput, "Pesan tidak boleh kosong.");
                isValid = false;
            }

            if (isValid) {
                submitText.classList.add("hidden");
                loadingText.classList.remove("hidden");
                submitButton.disabled = true;
                formMessage.classList.add("hidden");

                // Simulate form submission (replace with actual AJAX call)
                setTimeout(() => {
                    submitText.classList.remove("hidden");
                    loadingText.classList.add("hidden");
                    submitButton.disabled = false;

                    formMessage.classList.remove("hidden");
                    formMessage.classList.remove("bg-red-100", "text-red-700");
                    formMessage.classList.add("bg-green-100", "text-green-700");
                    formMessage.textContent = "Pesan Anda berhasil dikirim!";
                    contactForm.reset(); // Clear form
                }, 2000);
            } else {
                formMessage.classList.remove("hidden");
                formMessage.classList.remove("bg-green-100", "text-green-700");
                formMessage.classList.add("bg-red-100", "text-red-700");
                formMessage.textContent = "Mohon lengkapi semua kolom yang wajib diisi.";
            }
        });

        function displayError(inputElement, message) {
            const errorMessageEl = inputElement.nextElementSibling;
            if (errorMessageEl && errorMessageEl.classList.contains("error-message")) {
                errorMessageEl.textContent = message;
                errorMessageEl.classList.remove("hidden");
                inputElement.classList.add("border-red-500");
            }
        }
          }

    // 5. Scroll Reveal Animation (using Intersection Observer)
    const sections = document.querySelectorAll("section");
    const options = {
        root: null, // viewport
        threshold: 0.1, // 10% of the section must be visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in", "animate-slide-up");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 6. Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopButton.classList.remove("opacity-0", "invisible");
                backToTopButton.classList.add("opacity-100", "visible");
            } else {
                backToTopButton.classList.remove("opacity-100", "visible");
                backToTopButton.classList.add("opacity-0", "invisible");
            }
        });

        backToTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 7. Active Navigation Link Highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    function highlightNavLink() {
        let current = "home";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust offset for fixed header
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-primary-600", "dark:text-primary-400");
            link.classList.add("text-secondary-700", "dark:text-secondary-300");
            if (link.href.includes(current)) {
                link.classList.add("text-primary-600", "dark:text-primary-400");
                link.classList.remove("text-secondary-700", "dark:text-secondary-300");
            }
        });

        mobileNavLinks.forEach(link => {
            link.classList.remove("text-primary-600", "dark:text-primary-400");
            link.classList.add("text-secondary-700", "dark:text-secondary-300");
            if (link.href.includes(current)) {
                link.classList.add("text-primary-600", "dark:text-primary-400");
                link.classList.remove("text-secondary-700", "dark:text-secondary-300");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Call on load to set initial active link
});
