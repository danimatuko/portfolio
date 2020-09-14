const aboutTitle = document.querySelector('.about-wrapper h2');
const aboutParagraph = document.querySelector('.about-wrapper p');
const projectTitle = document.querySelector('#projects-section h2');
const projects = document.querySelectorAll('.project');


const primary_color = '#25b7a0';
const secondary_color = '#07374a';


window.addEventListener('scroll', () => {
    let aboutArea = document.querySelector("#about-section").getBoundingClientRect().top;
    let projectsArea = document.querySelector("#projects-section").getBoundingClientRect().top;
    let introArea = document.querySelector('#intro').getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.3;

    if (aboutArea < screenPosition) {
        aboutTitle.classList.add('slideUp');
        aboutParagraph.classList.add('slideUp');
    }

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



// Close menu on moblie
if (screen.width <= 550) {
    const hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('opened');
    });
}