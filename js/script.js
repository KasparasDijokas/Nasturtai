
mybutton = document.getElementById("btn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


// for the working hours in bazaar card
$(document).ready(function() {
$('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
});



// NAVIGATION 

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const exit = document.querySelector('.exit');

  // toggle nav
  burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
          // animate links
  navLinks.forEach(link, index => {
      if(link.style.animation) {
          link.style.animation = ''
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7)s`;
      }
  });
  // burger animation
  burger.classList.toggle('toggle');
  });

  exit.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })


}

navSlide();