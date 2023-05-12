
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



//Welchselnder Text am Anfang
  const texts = document.querySelectorAll('.centered-text');
  const dots = document.querySelectorAll('.pagination-dot');
  let currentIndex = 0;
  let timer;

  function slideTexts() {
    texts[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % texts.length;
    texts[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function changeText(index) {
    clearInterval(timer); 
    texts[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    texts[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    timer = setInterval(slideTexts, 7000); 
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => changeText(index));
  });

  timer = setInterval(slideTexts, 4000); 



  // //Fade in of Webas/Websites, Header, Text
  // function fadeInElements() {
  //   const textContainer = document.querySelector('.text-container');
  //   const header = document.querySelector('header');
  //   const centeredTextContainer = document.querySelector('.centered-text-container');
  //   const pagination = document.querySelector('.pagination');
  
  //   textContainer.style.opacity = '0';
  //   textContainer.classList.add('text-container-moved-down');
    
  //   setTimeout(() => {
  //     textContainer.style.transition = 'opacity 1s, transform 1s';
  //     textContainer.style.opacity = '1';
  //     textContainer.classList.remove('text-container-moved-down');
  //   }, 500);
  
  //   setTimeout(() => {
  //     header.style.transition = 'opacity 1s';
  //     header.style.opacity = '1';
  //   }, 1500);
  
   
  // }

  // document.addEventListener('DOMContentLoaded', fadeInElements);


  function fadeInElements() {
    const textContainer = document.querySelector('.text-container');
    const adjContainer = document.querySelector('.adjectives-container');
    const adjectives = Array.from(adjContainer.children);
    const header = document.querySelector('header');
  
    let adjIndex = 0;
  
    function showAdjective() {
      adjectives[adjIndex].classList.add('active');
  
      setTimeout(() => {
        adjectives[adjIndex].classList.remove('active');
        adjIndex++;
  
        if (adjIndex < adjectives.length) {
          setTimeout(showAdjective, 1000);
        } else {
          adjContainer.style.display = 'none'; /* Verstecken Sie den Adjektiv-Container */
  
          setTimeout(() => {
            textContainer.style.transition = 'opacity 1s, transform 1s';
            textContainer.style.opacity = '1';
            textContainer.classList.remove('text-container-moved-down');
          }, 500);
  
          setTimeout(() => {
            header.style.transition = 'opacity 1s';
            header.style.opacity = '1';
          }, 1500);
        }
      }, 1000);
    }
  
    showAdjective();
  }
  
  document.addEventListener('DOMContentLoaded', fadeInElements);
  
  



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


