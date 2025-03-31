const content = document.querySelector('.content');
const imageContainer = document.querySelector('.image-container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

observer.observe(content);
observer.observe(imageContainer);



