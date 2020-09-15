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


    // const navBar = document.querySelector("#nav-bar");
    // const midNav = navBar.getBoundingClientRect().bottom / 2;

    // if (introArea < midNav) navBar.style.background = primary_color;

    // if (aboutArea < midNav) navBar.style.background = secondary_color;

    // if (projectsArea < midNav) navBar.style.background = primary_color;

});



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
            }, 450);


        });
    });



}