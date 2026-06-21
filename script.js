// ===============================
// MOBILE HAMBURGER MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

// ===============================
// FAQ ACCORDION
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn =
document.getElementById("scrollTopBtn");

if(scrollBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            scrollBtn.style.display = "block";

        }else{

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// SMOOTH SCROLLING
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Booking Request Sent Successfully!"
            );

            contactForm.reset();

        }
    );

}

// ===============================
// NAVBAR EFFECT ON SCROLL
// ===============================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(header){

        if(window.scrollY > 50){

            header.style.background =
            "rgba(0,0,0,0.90)";

            header.style.boxShadow =
            "0 0 20px rgba(0,255,136,.15)";

        }else{

            header.style.background =
            "rgba(0,0,0,0.25)";

            header.style.boxShadow =
            "none";

        }

    }

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
document.querySelectorAll(
".game-card, .setup-card, .price-card, .faq-item"
);

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .6s ease";

});

function reveal(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            el.style.opacity = "1";
            el.style.transform =
            "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// CURRENT YEAR FOOTER
// ===============================

const year =
document.querySelector(".year");

if(year){

    year.textContent =
    new Date().getFullYear();

}