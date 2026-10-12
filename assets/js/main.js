/* ============================================================
   SHAHEEN-OS Website - Main JavaScript
   Handles navigation, interactions, and dynamic behavior
   ============================================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initImageFallbacks();
});

/* ============================================================
   Mobile Navigation Toggle
   ============================================================ */

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) {
        console.warn('Navigation elements not found in DOM');
        return;
    }
    
    // Toggle menu visibility
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-container')) {
            closeMenu();
        }
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
}

function toggleMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    const isOpen = navMenu.classList.contains('active');
    
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    navMenu.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
}

/* ============================================================
   Smooth Scroll for Anchor Links
   ============================================================ */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hrefs or special cases
            if (href === '#' || href === '') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Get the navbar height for offset
                const navbar = document.querySelector('.navbar');
                const offset = navbar ? navbar.offsetHeight : 0;
                
                // Calculate scroll position
                const targetPosition = targetElement.offsetTop - offset;
                
                // Scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================================
   Image Fallback Handling
   ============================================================ */

function initImageFallbacks() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Handle broken images
        img.addEventListener('error', function() {
            handleImageError(this);
        });
        
        // Lazy loading preparation
        img.addEventListener('load', function() {
            // Image loaded successfully
        });
    });
}

function handleImageError(imgElement) {
    // Log the error
    console.warn('Image failed to load:', imgElement.src);
    
    // Add fallback class for styling
    imgElement.classList.add('image-error');
    
    // Add accessible fallback message
    const fallbackText = imgElement.alt || 'Image could not be loaded';
    imgElement.parentElement.insertAdjacentHTML('afterend', 
        `<p class="image-fallback-message">Note: "${fallbackText}" could not be loaded. Please check your connection or the image URL.</p>`
    );
}

/* ============================================================
   Keyboard Navigation Support
   ============================================================ */

document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    }
});

/* ============================================================
   Focus Management
   ============================================================ */

// Ensure focus is visible on interactive elements
function initFocusIndicators() {
    // This is handled via CSS :focus-visible pseudo-class
    // Added for future enhancement if needed
}

/* ============================================================
   Utility Functions
   ============================================================ */

// Check if element is in viewport
function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Log initialization
console.log('SHAHEEN-OS website initialized successfully');
