const video = document.getElementById('wildlifeVideo');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (video.style.display === 'none') {
        video.style.display = 'block';
        toggleButton.textContent = 'Hide Video';
        video.play();
    } else {
        video.style.display = 'none';
        toggleButton.textContent = 'Show Video';
        video.pause();
    }
});
