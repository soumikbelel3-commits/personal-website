// Custom Cursor Logic
const cursor = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    
    // Slight delay for the blur effect
    setTimeout(() => {
        cursorBlur.style.left = e.clientX + "px";
        cursorBlur.style.top = e.clientY + "px";
    }, 50);
});

// Hover effects for the cursor
const links = document.querySelectorAll("a, .hamburger");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid var(--accent-color)";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "var(--accent-color)";
        cursor.style.border = "none";
    });
});

// Navigation Bar Scroll Effect
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const linksArr = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
    
    // Burger lines animation
    const lines = document.querySelectorAll(".hamburger div");
    if(navLinks.classList.contains("nav-active")) {
        lines[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
    }
});

linksArr.forEach(link => {
    link.addEventListener("click", () => {
        if(navLinks.classList.contains("nav-active")) {
            navLinks.classList.remove("nav-active");
            
            // Reset burger lines
            const lines = document.querySelectorAll(".hamburger div");
            lines[0].style.transform = "none";
            lines[1].style.opacity = "1";
            lines[2].style.transform = "none";
        }
    });
});

// Scroll Reveal Effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
            // Optional: observer.unobserve(entry.target); // Unobserve if you only want it to animate once
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el, index) => {
    // Stagger animation delay based on index for children elements
    if(el.parentElement.classList.contains("hero-content") || el.parentElement.classList.contains("projects-grid")) {
        el.style.transitionDelay = `${index * 0.1}s`;
    }
    observer.observe(el);
});
