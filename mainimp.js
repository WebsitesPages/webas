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