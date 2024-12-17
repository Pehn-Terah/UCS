document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Hamburger menu toggle
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

      burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
      });
    }

    navSlide();

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
