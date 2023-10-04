import React, { useEffect } from 'react'
import "./events.css"
export default function Events() {

    useEffect(() => {
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

            // Handle scrollbar thumb drag
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                // Update thumb position on mouse move
                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;

                    // Ensure the scrollbar thumb stays within bounds
                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                }

                // Remove event listeners on mouse up
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }

                // Add event listeners for drag interaction
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });

            // Slide images according to the slide button clicks
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                });
            });

            // Show or hide slide buttons based on scroll position
            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
            }

            // Update scrollbar thumb position based on image scroll
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }

            // Call these two functions when image list scrolls
            imageList.addEventListener("scroll", () => {
                updateScrollThumbPosition();
                handleSlideButtons();
            });
        }

        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);
    }, [])

    return (
        <div id='evnt'>
            <h1 className="heading">Events</h1>
            <div className="container">

                <div className="slider-wrapper">
                    <button id="prev-slide" className="slide-button material-symbols-rounded">
                        C
                    </button>
                    <ul className="image-list">
                        <img className="image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZcp-S6WcGLgzFHAURbxHuj6DqFKWT4rcyw&usqp=CAU" alt="img-1" />


                        <img className="image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpcicwiCpYwBw9LVvzZgJBc_m46m4zo3RHw&usqp=CAU" alt="img-2" />
                        <img className="image-item" src="https://salta-trampolines.imgix.net/Homepage_Comfort-Edition-Ground.jpg?auto=compress%2Cformat&fit=clip&q=80&w=960&s=28c7249aee2e74a7b38361afa03011f2" alt="img-3" />
                        <img className="image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqLv-_qd39-RGfHLJNgPJmYC01gPqEo7Vq1BRjmx3FwpIyJIH7BXcvW9YHNaRjve6Y8Y&usqp=CAU" alt="img-4" />
                        <img className="image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoVcMX8AiqsSMNtHKoEyoeSxLVsv-a7Jtaw&usqp=CAU" alt="img-5" />
                        <img className="image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRmizcRbsCc8c0lmS9pSH27X3z4MlAm7tzg&usqp=CAU" alt="img-6" />

                    </ul>
                    <button id="next-slide" className="slide-button material-symbols-rounded">
                        C
                    </button>
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb" />
                    </div>
                </div>
            </div>
        </div>

    )
}

