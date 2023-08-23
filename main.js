
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
const slantedContainers = document.querySelectorAll('.slanted-container');

slantedContainers.forEach(container => {
    const texts = container.querySelectorAll('.centered-text');
    const dots = container.querySelectorAll('.pagination-dot');
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

    timer = setInterval(slideTexts, 6000); 
});



  //Fade in of Webas/Websites, Header, Text
  function fadeInElements() {
    const textContainer = document.querySelector('.text-container');
    const header = document.querySelector('header');
    const centeredTextContainer = document.querySelector('.centered-text-container');
    const pagination = document.querySelector('.pagination');
  
    textContainer.style.opacity = '0';
    textContainer.classList.add('text-container-moved-down');
    
    setTimeout(() => {
      textContainer.style.transition = 'opacity 1s, transform 1s';
      textContainer.style.opacity = '1';
      textContainer.classList.remove('text-container-moved-down');
    }, 500);
  
    setTimeout(() => {
      header.style.transition = 'opacity 1s';
      header.style.opacity = '1';
    }, 1500);
  
    setTimeout(() => {
      centeredTextContainer.style.transition = 'opacity 1s';
      centeredTextContainer.style.opacity = '1';
      pagination.style.transition = 'opacity 1s';
      pagination.style.opacity = '1';
    }, 2500);
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


window.addEventListener("scroll", updateHeaderOnScroll);


  
  
  
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question-step');
    let currentQuestion = 0;
  
    function updateDots(question) {
      const dots = question.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        if (index === currentQuestion) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    questions[currentQuestion].classList.add('active');
    questions[currentQuestion].style.display = 'block';
    updateDots(questions[currentQuestion]);
  
    questions.forEach((question, index) => {
      question.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
          question.classList.remove('active');
          setTimeout(() => {
            question.style.display = 'none';
            currentQuestion++;
  
            if (currentQuestion < questions.length) {
              questions[currentQuestion].style.display = 'block';
              setTimeout(() => {
                questions[currentQuestion].classList.add('active');
              }, 10);
  
              // Aktualisieren Sie die Dots
              updateDots(questions[currentQuestion]);
  
              if (questions[currentQuestion].classList.contains('search-step')) {
                setTimeout(() => {
                  const loader = questions[currentQuestion].querySelector('.loader');
                  const checkmark = questions[currentQuestion].querySelector('.checkmark');
  
                  loader.style.display = 'none';
                  checkmark.style.display = 'block';
  
                  setTimeout(() => {
                    questions[currentQuestion].classList.remove('active');
                    questions[currentQuestion].style.display = 'none';
  
                    const contactForm = document.querySelector('#contact-form');
                    contactForm.style.display = 'block';
                    setTimeout(() => {
                      contactForm.classList.add('active');
                    }, 10);
                  }, 3000); // 3 Sekunden für Häkchen-Anzeige
                }, 3000); // 3 Sekunden für Loader-Animation
              }
            } else {
              document.querySelector('#contact-form').style.display = 'block';
            }
          }, 500);
        });
      });
    });
  });
  
  

  

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
  
  // Die Optionen für den Intersection Observer
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.50
};

// Der Callback für den Intersection Observer
let callback = (entries, observer) => {
  entries.forEach(entry => {
      // Wenn das Element zu mindestens 20% sichtbar ist
      if (entry.isIntersecting) {
          // Füge die Klasse "visible" hinzu
          entry.target.classList.add('visible');
          // Das Element muss nicht weiter beobachtet werden, also entferne es vom Observer
          observer.unobserve(entry.target);
      }
  });
};

// Erstelle den Intersection Observer
let observer = new IntersectionObserver(callback, options);

// Beobachte alle Elemente mit der Klasse "obser"
document.querySelectorAll('.obser').forEach(elem => {
  observer.observe(elem);
});


document.addEventListener('DOMContentLoaded', function() {
  // ... Ihr vorheriger Code ...

  const popupOverlay = document.querySelector('.popup-overlay');
  const popupCloseBtn = document.querySelector('.popup-close-btn');
  const popupBtn = document.querySelector('.popup-btn');

  setTimeout(() => {
      popupOverlay.style.display = 'block'; // Zeigt das Popup an
      setTimeout(() => {
          popupOverlay.classList.add('active'); // Fügt die Animation hinzu
      }, 50);
      document.body.style.overflow = 'hidden'; // Verhindert das Scrollen
  }, 25000);

  popupCloseBtn.addEventListener('click', () => {
      popupOverlay.classList.remove('active');
      setTimeout(() => {
          popupOverlay.style.display = 'none'; // Versteckt das Popup
      }, 300);
      document.body.style.overflow = 'auto'; // Erlaubt das Scrollen wieder
  });

  // Weiterleitung zum #anfragen Abschnitt, wenn der Button geklickt wird
  popupBtn.addEventListener('click', () => {
      window.location.href = "#anfragen";
      popupOverlay.classList.remove('active');
      setTimeout(() => {
          popupOverlay.style.display = 'none'; // Versteckt das Popup
      }, 300);
      document.body.style.overflow = 'auto'; // Erlaubt das Scrollen wieder
  });
});


// Variablen für die Optionen
let bereitsWebseite, unterseitenAnzahl, texterstellung, visuelleEffekte, fertigstellungsDatum;

// Event-Listener für die Optionen
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', function() {
        let parentQuestion = this.closest('.question-step');
        if (parentQuestion.querySelector('.kontakth2').textContent.includes('Haben Sie bereits eine Webseite?')) {
            bereitsWebseite = this.textContent;
        } else if (parentQuestion.querySelector('.kontakth2').textContent.includes('Wieviele Unterseiten soll Ihre Seite haben?')) {
            unterseitenAnzahl = this.textContent;
        } else if (parentQuestion.querySelector('.kontakth2').textContent.includes('Benötigen Sie auch Unterstützung bei der Erstellung von Texten?')) {
            texterstellung = this.textContent;
        } else if (parentQuestion.querySelector('.kontakth2').textContent.includes('Sind spezielle visuelle Effekte oder Animationen gewünscht?')) {
            visuelleEffekte = this.textContent;
        } else if (parentQuestion.querySelector('.kontakth2').textContent.includes('Wann soll Ihre Webseite fertig sein?')) {
            fertigstellungsDatum = this.textContent;
        }
    });
});

// Event-Listener für das Kontaktformular
document.getElementById('contact-form').querySelector('form').addEventListener('submit', function(event) {
    // // Verhindert das tatsächliche Absenden des Formulars
    // event.preventDefault();

    // Kontaktformular Daten extrahieren
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("phone").value;
    let nachricht = document.getElementById("message").value;

    // Daten ausgeben
    console.log('Bereits Webseite:', bereitsWebseite);
    console.log('Unterseiten Anzahl:', unterseitenAnzahl);
    console.log('Texterstellung:', texterstellung);
    console.log('Visuelle Effekte:', visuelleEffekte);
    console.log('Fertigstellungsdatum:', fertigstellungsDatum);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Telefon:', telefon);
    console.log('Nachricht:', nachricht);
});

