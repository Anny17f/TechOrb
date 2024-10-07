document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Define menuToggle and navMenu
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
    // document.addEventListener('DOMContentLoaded', function () {
    //     const toggleButton = document.querySelector('.navbar-toggle');
    //     const navMenu = document.querySelector('.nav-menu');

    //     toggleButton.addEventListener('click', function () {
    //         navMenu.classList.toggle('active');
    //     });
    // });

    // Contact Form Validation
    const contactForm = document.querySelector('form');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let valid = true;

            // Name validation
            if (nameInput.value.trim() === '') {
                alert('Please enter your name.');
                valid = false;
            }

            // Email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailInput.value.match(emailPattern)) {
                alert('Please enter a valid email address.');
                valid = false;
            }

            // Message validation
            if (messageInput.value.trim() === '') {
                alert('Please enter a message.');
                valid = false;
            }

            // Prevent form submission if validation fails
            if (!valid) {
                e.preventDefault();
            } else {
                alert('Thank you! Your message has been sent.');
                contactForm.reset(); // Clear form after submission
            }
        });
    }

    // Carousel functionality
    let currentSlideIndex = 0;

    // Attach currentSlide to the window object for global access
    window.currentSlide = function(n) {
        currentSlideIndex = n - 1; // Adjust index to match the slide position
        showSlide(currentSlideIndex);
    };

    // Function to show the selected slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide'); // Select all slides
        const dots = document.querySelectorAll('.dot');

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none'; // Hide each slide
        });

        // Show the current slide
        if (slides[index]) {
            slides[index].style.display = 'flex'; // Display the current slide (change to 'block' if needed)
        }

        // Update the dots to show the active one
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    // Initially show the first slide
    showSlide(currentSlideIndex);
});

// Function to show the second question and hide the first one
function showQuestionTwo() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
}

// Function to show the first question and hide the second one (Back button)
function showQuestionOne() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
}


