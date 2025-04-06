document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
    });
});
let videos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

setInterval(() => {
    videos[currentVideo].classList.remove('active');
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].classList.add('active');
}, 10000); // Change video every 10 seconds