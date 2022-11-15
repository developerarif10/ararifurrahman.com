/*=============== SMOTH SCROLL  ===============*/

const scroll = new SmoothScroll('.navbar [href*="#"]', {
  speed: 300,
});

/*=============== FILTERS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  });
});

// ------->    SWIPPER JS SLIDER JS CODE    <<------

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Navbar js code

const mobileNav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobileNav.addEventListener("click", () => toggleNavbar());

// SCROLL TO THE TOP JS CODE

/* Minified js for jQuery BackTop */
!(function (o) {
  o.fn.backTop = function (e) {
    var n = this,
      i = o.extend({ position: 400, speed: 500, color: "white" }, e),
      t = i.position,
      c = i.speed,
      d = i.color;
    n.css({ right: 20, bottom: 25, position: "fixed" }),
      o(document).scroll(function () {
        var e = o(window).scrollTop();
        console.log(e), e >= t ? n.fadeIn(c) : n.fadeOut(c);
      }),
      n.click(function () {
        o("html, body").animate({ scrollTop: 0 }, { duration: 1200 });
      });
  };
})(jQuery);

$(document).ready(function () {
  $("#backTop").backTop({
    position: 1600,
    speed: 500,
  });
});

// --------  EMAIL JS LINK  -------  -->

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    (contactName,
    value === "" || contactEmail.value === "" || contactProject.value === "")
  ) {
    // Add or remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "Write all the input fields 🐱‍💻";
  } else {
    // serviceID - templateID - #form - Publickey
    emailjs
      .sendForm(
        "service_vv2inde",
        "template_cv4bt8a",
        "#contact-form",
        "g2J3c4xTCdvf2mAMq"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent ✔";

          // Remove message after five seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    //  To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);



// JS Code for Web page animation 

const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElementsTop = document.querySelectorAll('.hidden_top');

const hiddenElementsBottom = document.querySelectorAll('.hidden_bottom');

const hiddenElementsLeft = document.querySelectorAll('.hidden_left');

const hiddenElementsRight = document.querySelectorAll('.hidden_right');

hiddenElementsTop.forEach((el) => observer.observe(el)); 
hiddenElementsBottom.forEach((el) => observer.observe(el)); 
hiddenElementsLeft.forEach((el) => observer.observe(el)); 
hiddenElementsRight.forEach((el) => observer.observe(el));