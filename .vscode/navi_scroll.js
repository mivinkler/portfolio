const observer1 = new IntersectionObserver((entries)  => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu_item').forEach((link) => {
                link.classList.toggle(
                    'menu_activ',
                    link.getAttribute('href').replace('#', '') === entry.target.id
                );
            });
        }
    });
}, { 
    threshold: 1,
});



document.querySelectorAll('section').forEach(
    (section) => observer1.observe(section)
);