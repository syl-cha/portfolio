document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const slides = Array.from(track.children);

        if (slides.length < 2) return;

        const firstClone = slides[0].cloneNode(true);
        track.appendChild(firstClone);

        let currentIndex = 0;
        const totalSlides = slides.length + 1;
        const intervalTime = 3000;
        let slideInterval;

        const nextSlide = () => {
            currentIndex++;
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            if (currentIndex === totalSlides - 1) {
                setTimeout(() => {
                    track.style.transition = "none";
                    currentIndex = 0;
                    track.style.transform = `translateX(0)`;
                }, 500);
            }
        };

        const startSlide = () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        };

        const stopSlide = () => {
            clearInterval(slideInterval);
        };

        startSlide();

        carousel.addEventListener("mouseenter", stopSlide);
        carousel.addEventListener("mouseleave", startSlide);
    });
});
