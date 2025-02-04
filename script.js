document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Hamburger menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        document.body.style.overflow = nav.classList.contains('nav-active') 
        ? 'hidden' 
        : 'auto';

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Service pop-up functionality
    const serviceButtons = document.querySelectorAll('.service-button');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupClose = document.getElementById('popup-close');

    const serviceInfo = {
        1: {
            title: "Service 1",
            description: "Detailed information about Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
        },
        2: {
            title: "Service 2",
            description: "Detailed information about Service 2. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
        },
        3: {
            title: "Service 3",
            description: "Detailed information about Service 3. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
        },
        4: {
            title: "Service 4",
            description: "Detailed information about Service 4. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
    };

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceId = button.getAttribute('data-service');
            const service = serviceInfo[serviceId];
            popupTitle.textContent = service.title;
            popupDescription.textContent = service.description;
            popupOverlay.style.display = 'flex';
        });
    });

    // Gallery pop-up functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popupImage = document.getElementById('popup-image');
    const popupCaption = document.getElementById('popup-caption');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.gallery-caption').textContent;
            popupImage.src = imgSrc;
            popupCaption.textContent = caption;
            popupOverlay.style.display = 'flex';
        });
    });
    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

});

// Get the button
let backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top for Brave
};
