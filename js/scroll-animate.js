// Animate sections on scroll into view
document.querySelectorAll('.section, .service-card, .gallery-item, .testimonial-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                el.style.transition = 'opacity 1.2s, transform 1.2s';
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
                observer.disconnect();
            }
        });
    });
    observer.observe(el);
});