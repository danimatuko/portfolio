const aboutTitle = document.querySelector('.about-wrapper h2');
const aboutParagraph = document.querySelector('.about-wrapper p');
const projectTitle = document.querySelector('#projects-section h2');
const projects = document.querySelectorAll('.project');

const primary_color = '#25b7a0';
const secondary_color = '#07374a';

/* Scroll Events */
window.addEventListener('scroll', () => {
    let aboutArea = document.querySelector("#about-section").getBoundingClientRect().top;
    let projectsArea = document.querySelector("#projects-section").getBoundingClientRect().top;
    let introArea = document.querySelector('#intro').getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.3;
    // About Section
    if (aboutArea < screenPosition) {
        aboutTitle.classList.add('slideUp');
        aboutParagraph.classList.add('slideUp');
    }
    // Projects Section
    if (projectsArea < screenPosition) {
        projectTitle.classList.add('slideUp');
        projects.forEach((project) => {
            let projectsPos = project.getBoundingClientRect().top;
            if (projectsPos < screenPosition) project.classList.add('slideCenter');
        });
    }

});


/* scrollSpy */

(function() {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(element) {
        sections[element.id] = element.offsetTop;
    });


    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let contactArea = document.querySelector('#contact').getBoundingClientRect();

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                console.log([i]);
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }

        // if the page scrolled to bottom contact is active
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*= contact ]').setAttribute('class', 'active');
        }
    };
})();



/* Mobile Navigation */
if (screen.width <= 550) {
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#nav-bar");
    const menuItem = document.querySelectorAll(" .menu-item ");


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('opened');
        hamburger.classList.contains('opened') ? menu.classList.add('show-menu') : menu.classList.remove('show-menu');

    });

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                hamburger.classList.remove('opened');
                menu.classList.remove('show-menu');
            }, 850);


        });
    });



}