document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const finestText = document.getElementById('finest-text');

    window.addEventListener('scroll', function() {
        // Get the position of the finestText relative to the top of the document
        const finestTextPosition = finestText.getBoundingClientRect().top;

        // Check if the finestText is hitting the navbar
        if (finestTextPosition <= 130) { // 130px is the height of your navbar
            navbar.style.visibility = 'hidden';
        } else {
            navbar.style.visibility = 'visible';
        }
    });
});

let slides = document.querySelectorAll(".slide");

let counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}% `
    }
);
let goPrev = () => {
    counter--;
    slideImage();
}
let goNext = () => {
    counter++;
    slideImage();
}
let slideImage = () => {
    if (counter < 0) {
        counter = slides.length - 1; // Set counter to the last slide index
    } else if (counter >= slides.length) {
        counter = 0; // Set counter to the first slide index
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


// let counter = 0;
// const slides = document.querySelectorAll(".slide");

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}% `;
// });

// function navigate() {
//     counter++;
//     if (counter >= slides.length) {
//         counter = 0;
//     }

//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }