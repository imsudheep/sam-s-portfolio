document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-icon');
    const closeMenu = document.getElementById('close-menu');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Open Menu
    menuToggle.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close Menu
    closeMenu.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Video Mute/Unmute Logic
    const muteButtons = document.querySelectorAll('.mute-btn');

    muteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from bubbling if container has click actions
            const video = btn.previousElementSibling;
            if (video && video.tagName === 'VIDEO') {
                video.muted = !video.muted;
                const icon = btn.querySelector('i');
                if (video.muted) {
                    icon.className = 'fa-solid fa-volume-xmark';
                } else {
                    icon.className = 'fa-solid fa-volume-high';
                }
            }
        });
    });
});
