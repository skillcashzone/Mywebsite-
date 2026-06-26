// Lightbox elements ko select karein
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Har image par click event lagayein
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgUrl = item.querySelector('.portfolio-img').getAttribute('src');
        lightboxImg.setAttribute('src', imgUrl);
        lightbox.style.display = 'flex'; // Lightbox show karein
    });
});

// Close button par click karne par modal band karein
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Bahar click karne par bhi modal band karein
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
