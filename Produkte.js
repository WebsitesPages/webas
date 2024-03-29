
//Hamburger Menu
const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const closeIcon = document.querySelector('.close-icon');
  const menuItems = document.querySelectorAll('.menu li a');
  
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });
  
  closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    menu.classList.remove('active');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu.classList.contains('active')) {
      menuIcon.classList.remove('active');
      menu.classList.remove('active');
    }
  });
  
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuIcon.classList.remove('active');
      menu.classList.remove('active');
    });
  });


  function fadeInElements() {
    const textContainer = document.querySelector('.text-container');
    const adjContainer = document.querySelector('.adjectives-container');
    const adjectives = Array.from(adjContainer.children);
    const header = document.querySelector('header');
    const scrollDownIndicator = document.querySelector('.scroll-down-indicator'); // Ersetzen Sie dies durch die tatsächliche Klasse Ihres Scroll-Indikators
  
    let adjIndex = 0;
    scrollDownIndicator.style.display = 'none';

  
    function showAdjective() {
      if (adjIndex > 0) {
        adjectives[adjIndex - 1].classList.remove('active');
        adjectives[adjIndex - 1].classList.add('exit');
      }
  
      setTimeout(() => {
        if (adjIndex < adjectives.length) {
          adjectives[adjIndex].classList.add('active');
          let displayDuration = adjIndex === 0 ? 1500 : 700;
          setTimeout(showAdjective, displayDuration);
          adjIndex++;
        } else {
          setTimeout(() => {
            adjContainer.style.display = 'none';
          }, 500);
  
          setTimeout(() => {
            textContainer.style.transition = 'opacity 1s, transform 1s';
            textContainer.style.opacity = '1';
            textContainer.classList.remove('text-container-moved-down');
          }, 500);
  
          setTimeout(() => {
            header.style.transition = 'opacity 1s';
            header.style.opacity = '1';
          }, 1000);
  
          setTimeout(() => {
            scrollDownIndicator.style.display = 'block'; // Zeigen Sie den Scroll-Indikator hier an
          }, 1500);
        }
      }, 50);
    }
  
    showAdjective();
  }
  
  document.addEventListener('DOMContentLoaded', fadeInElements);
  
  window.addEventListener('scroll', () => {
    const scrollDownIndicator = document.querySelector('.scroll-down-indicator'); // Ersetzen Sie dies durch die tatsächliche Klasse Ihres Scroll-Indikators
    if (window.scrollY > 0) {
      scrollDownIndicator.style.display = 'none';
    }
  });
  


  
  



  //Loading Screen
  function removePreloader() {
    const preloader = document.getElementById('preloader');
  
    setTimeout(() => {
      preloader.style.transition = 'opacity 0.5s';
      preloader.style.opacity = '0';
    }, 500);
  
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  }
  window.addEventListener('load', removePreloader);



  const header = document.getElementById("myHeader");
  const headerPlaceholder = document.getElementById("header-placeholder");
  const stickyClass = "sticky";
  const stickyVisibleClass = "sticky-visible";
  
  
  function updateHeaderOnScroll() {
      if (window.scrollY >= 100) {
          header.classList.add(stickyClass);
          headerPlaceholder.style.display = "block";
          headerPlaceholder.style.height = `${header.offsetHeight}px`;
          header.classList.add(stickyVisibleClass);
          menuIcon.classList.add('menu-icon-raised');
        } else {
          header.classList.remove(stickyClass);
          header.classList.remove(stickyVisibleClass);
          headerPlaceholder.style.display = "none";
          headerPlaceholder.style.height = "0";
          menuIcon.classList.remove('menu-icon-raised');
        }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          let target = document.querySelector(this.getAttribute('href'));
          if (target) {
              let headerHeight = document.getElementById('myHeader').offsetHeight;
              let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
              
              window.scrollTo({
                  top: targetPosition - headerHeight - parseInt(getComputedStyle(target).marginTop),
                  behavior: 'smooth'
              });
          }
      });
  });
  
  
  window.addEventListener("scroll", updateHeaderOnScroll);
  


let hr = document.querySelector('hr');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.33) {
            hr.style.opacity = "1";
        } else {
            hr.style.opacity = "0";
        }
    });
}, { threshold: [0, 0.33] });

observer.observe(hr);


let hrs = document.querySelectorAll('hr');
let blue = document.querySelectorAll(".blue");


const sectionOneOptions = {
    root: null,
    rootMargin: '20% 0% -20% 0%',
    threshold: 0
};

hrs.forEach(hr => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(`Intersection Ratio: ${entry.intersectionRatio}`);
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.width = "5rem";
            }
        });
    }, sectionOneOptions);

    observer.observe(hr);
});



blue.forEach(blue =>{
  let observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
      console.log(`Intersection Ratio: ${entry.intersectionRatio}`);
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
    }
});
}, sectionOneOptions);

observer.observe(blue);
});

$(document).ready(function(){
var randomNum = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
$('.anfragenanzahl').html(randomNum + ' Anfragen sind heute eingegangen');
});


