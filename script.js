document.getElementById('explore-button').addEventListener('click', function() {
    document.getElementById('hidden-sections').style.display = 'block';
});

// Gallery interaction remains unchanged.
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach((image) => {
    image.addEventListener('click', function() {
        const imageSource = image.src;
        const imageContent = image.nextElementSibling;

        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDescription = document.getElementById('lightbox-description');

        lightboxImage.src = imageSource;
        lightboxTitle.textContent = imageContent.querySelector('h2').textContent;
        lightboxDescription.textContent = imageContent.querySelector('p').textContent;

        document.getElementById('lightbox-container').style.display = 'flex';
    });
});

document.getElementById('lightbox-back-button').addEventListener('click', function() {
    document.getElementById('lightbox-container').style.display = 'none';
});
