// Main JavaScript for JTBeats Website

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle Functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Initialize Tiny Slider for Popular Items
    const slider = tns({
        container: '.my-slider',
        items: 3,
        slideBy: 1,
        autoplay: false,
        controls: true,
        nav: false,
        loop: true,
        speed: 400,
        gutter: 20,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Modal Functionality
    const cartModal = document.getElementById('cart-modal');
    const requestDishModal = document.getElementById('request-dish-modal');
    const cartIcon = document.getElementById('cart-icon');
    const requestDishBtn = document.getElementById('request-dish-btn');
    const backToMenuBtn = document.getElementById('back-to-menu');
    const cancelRequestBtn = document.getElementById('cancel-request');
    const submitRequestBtn = document.getElementById('submit-request');

    // Function to open a modal
    function openModal(modal) {
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    // Event Listeners for opening modals
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(cartModal);
    });

    requestDishBtn.addEventListener('click', function() {
        openModal(requestDishModal);
    });

    // Event Listeners for closing modals
    backToMenuBtn.addEventListener('click', function() {
        closeModal(cartModal);
    });

    cancelRequestBtn.addEventListener('click', function() {
        closeModal(requestDishModal);
    });

    submitRequestBtn.addEventListener('click', function() {
        closeModal(requestDishModal);
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeModal(cartModal);
        }
        if (e.target === requestDishModal) {
            closeModal(requestDishModal);
        }
    });

    // Video Player Functionality
    const video = document.getElementById('promo-video');
    const playBtn = document.getElementById('play-btn');

    // Toggle play/pause on video click
    video.addEventListener('click', toggleVideo);
    playBtn.addEventListener('click', toggleVideo);

    function toggleVideo() {
        if (video.paused) {
            video.play();
            playBtn.style.display = 'none';
        } else {
            video.pause();
            playBtn.style.display = 'flex';
        }
    }

    // Show play button when video is paused
    video.addEventListener('pause', function() {
        playBtn.style.display = 'flex';
    });

    // Hide play button when video is playing
    video.addEventListener('play', function() {
        playBtn.style.display = 'none';
    });

    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const requestForm = document.getElementById('request-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }


    // Hover effects for food cards
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // for counter 
    const counterContainers = document.querySelectorAll('.counter-container');

    counterContainers.forEach(container => {
        const minusBtn = container.querySelector('.minus-btn');
        const plusBtn = container.querySelector('.plus-btn');
        const countDisplay = container.querySelector('.count-display');

        let count = 0;

        plusBtn.addEventListener('click', function() {
            count++;

            // Show minus button and count-display when user clicks plus
            countDisplay.style.display = 'inline-block';
            minusBtn.style.display = 'inline-flex';

            countDisplay.textContent = count;
            container.classList.add('active');
        });

        minusBtn.addEventListener('click', function() {
            if (count > 1) {
                count--;
                countDisplay.textContent = count;
            } else {
                // Hide minus button and count-display when count returns to 0
                countDisplay.style.display = 'none';
                minusBtn.style.display = 'none';
                container.classList.remove('active');
            }
        });
    });
    
});

