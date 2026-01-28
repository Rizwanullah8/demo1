// ============================
// Testimonials Data
// ============================
const testimonials = [
    {
        name: "John Doe",
        position: "CEO, Tech Company",
        message: "Outstanding service and excellent results. Highly recommended!",
        rating: 5
    },
    {
        name: "Jane Smith",
        position: "Manager, Finance Corp",
        message: "Professional team that delivers beyond expectations.",
        rating: 5
    },
    {
        name: "Mike Johnson",
        position: "Founder, Startup Hub",
        message: "Best investment for our business growth.",
        rating: 5
    }
];

// ============================
// Display Testimonials
// ============================
function displayTestimonials() {
    const container = document.getElementById('testimonials-container');
    
    if (!container) return;

    const html = testimonials.map(testimonial => `
        <div class="col-md-6 col-lg-4">
            <div class="testimonial-item">
                <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
                <p class="testimonial-text">"${testimonial.message}"</p>
                <p class="testimonial-author">${testimonial.name}</p>
                <p class="testimonial-position">${testimonial.position}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// ============================
// Contact Form Handler
// ============================
document.addEventListener('DOMContentLoaded', function() {
    displayTestimonials();

    // Main Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Modal Form Submit
    const submitModalBtn = document.getElementById('submitModalBtn');
    if (submitModalBtn) {
        submitModalBtn.addEventListener('click', function() {
            alert('Thank you for your inquiry! We will contact you shortly.');
            document.getElementById('modalForm').reset();
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================
// Utility Functions
// ============================

// Fibonacci Function
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Get Fibonacci Sequence
function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Add Animation on Scroll
function addScrollAnimation() {
    const cards = document.querySelectorAll('.service-card, .testimonial-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
}

// Call animation function when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addScrollAnimation);
} else {
    addScrollAnimation();
}
