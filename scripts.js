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
    const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))


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

//sending the input from contact to gmail
// document.querySelector('form').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent form from refreshing the page
    
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const response = await fetch('http://localhost:3000/send-email', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data),
//         });
//         if (response.ok) {
//             alert('Your message has been sent successfully!');
//         } else {
//             alert('There was a problem sending your message.');
//         }
//     } catch (error) {
//         console.error('Fetch error:', error);
//         alert('There was a problem sending your message.');
//     }
// });



document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelector('.navbar-links');
    const hamburger = document.querySelector('.hamburger');
    let lastScrollPosition = 0;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('open');
    });

    // Auto-close the dropdown on scroll
    window.addEventListener('scroll', function() {
        let currentScrollPosition = window.scrollY;

        // Close the menu if user scrolls down
        if (currentScrollPosition > lastScrollPosition) {
            navbarLinks.classList.remove('open');
        }
        lastScrollPosition = currentScrollPosition;
    });
});

