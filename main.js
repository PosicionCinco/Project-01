// CHANGE NAVBAR STYLE ON SCROLL

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// SHOW / HIDE FAQ ANSWER

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // CHANGE ICON
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-toggle-off') {
            icon.className = "fa-solid fa-toggle-on"
        } else {
            icon.className = "fa-solid fa-toggle-off"
        }
    })
})

// SHOW / HIDE NAV MENU
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// CLOSE NAV MENU
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// SWIPER JS (EVENT SECTION)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });