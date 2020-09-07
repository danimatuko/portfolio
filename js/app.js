const aboutTitle = document.querySelector('.about-wrapper h2');
const aboutParagraph = document.querySelector('.about-wrapper p');
const projectTitle = document.querySelector('#projects-section h2');
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
    let aboutArea = document.querySelector("#about-section").getBoundingClientRect().top;
    let projectsArea = document.querySelector("#projects-section").getBoundingClientRect().top;
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

});