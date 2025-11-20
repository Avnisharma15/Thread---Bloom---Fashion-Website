// Get all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", function (e) {
        e.preventDefault();

        // Close other dropdowns
        document.querySelectorAll(".dropdown-parent").forEach(item => {
            if (item !== this.parentElement) {
                item.classList.remove("active");
            }
        });

        // Toggle current dropdown
        this.parentElement.classList.toggle("active");
    });
});
// Close dropdown if clicked outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-parent")) {
        document.querySelectorAll(".dropdown-parent").forEach(item => {
            item.classList.remove("active");
        });
    }
});




// Hero Swiper
var heroSwiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".mySwiper .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navIcons = document.querySelector(".nav-icons");
    const logo = document.querySelector(".logo"); // Select the logo

    hamburger.addEventListener("click", function () {
        // 1. Toggle the 'show' class to show/hide the main navigation links
        navLinks.classList.toggle("show");

        // 🔥 Add/Remove blur on body
        document.querySelector(".hero").classList.toggle("blurred");

        // 2. Change the hamburger icon to a close icon
        const icon = this.querySelector('i');
        const tooltipText = this.getAttribute('data-tooltip');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
            this.setAttribute('data-tooltip', 'Close'); // Set tooltip to 'Close'
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            this.setAttribute('data-tooltip', 'Menu'); // Set tooltip back to 'Menu'F
        }

        // 3. Hide or show the nav-icons (Wishlist, Cart, Search)
        navIcons.classList.toggle("hide-icons");

        // 4. Center the hamburger icon when the menu is open (Optional but recommended)
        // This will move the hamburger icon to the center right of the navbar
        if (navLinks.classList.contains("show")) {
            logo.style.marginRight = "auto";
            hamburger.style.marginRight = "20px";
        } else {
            logo.style.marginRight = "0";
            hamburger.style.marginRight = "0";
        }

    });
});




// Swiper for NewArrivals + BestSellingItem + ProductSuggestion
document.querySelectorAll(".arrivalsSwiper , .sellingSwiper , .productSwiper").forEach((swiperEl) => {
    const swiperConfig = {
        slidesPerView: 3,
        spaceBetween: 30,
        // loop: swiperEl.classList.contains("sellingSwiper"),
        grabCursor: swiperEl.classList.contains("arrivalsSwiper"),
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        },
    };

    const paginationEl = swiperEl.querySelector(".swiper-pagination");
    if (paginationEl) {
        swiperConfig.pagination = {
            el: paginationEl,
            clickable: true,
            dynamicBullets: true,
        };
    }

    const nextEl = swiperEl.querySelector(".swiper-button-next");
    const prevEl = swiperEl.querySelector(".swiper-button-prev");
    if (nextEl && prevEl) {
        swiperConfig.navigation = {
            nextEl: nextEl,
            prevEl: prevEl,
        };
    }

    new Swiper(swiperEl, swiperConfig);
});




// Classic Collection
// Select elements
const playBtn = document.getElementById("playVideoBtn");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");
const video = document.getElementById("promoVideo");

// When play button is clicked → open modal + autoplay video
playBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // show modal
    video.play();
});

// When close button is clicked → close modal + stop video
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0; //reset to start
});

// When clicking outside the video → also close modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
});




// Testimonial
var testimonialSwiper = new Swiper(".testimonialSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});





if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // disable default restore
    window.addEventListener('beforeunload', () => {
        localStorage.setItem("scrollPos", window.scrollY);
    });

    window.addEventListener('load', () => {
        const scrollPos = localStorage.getItem("scrollPos");
        if (scrollPos) {
            window.scrollTo(0, parseInt(scrollPos));
        }
    });
}
