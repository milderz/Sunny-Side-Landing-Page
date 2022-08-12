const mobileMenu = document.querySelector('.hero__menu')
const mobileNav = document.querySelector('.hero__nav')
const toggleElements = document.querySelectorAll('.toggle-el')

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-active')
    mobileMenu.classList.toggle('menu-disabled')
    toggleElements.forEach(el => el.classList.toggle('toggle-inactive'))
})


window.onscroll = function(){
    stickyNavbar();
}

let navbar = document.querySelector('.hero__header-container');
let sticky = navbar.offSetTop;

let stickyNavbar = () => {
    if(window.pageYOffset > 80){
        navbar.classList.add('sticky-navbar');
    } else {
        navbar.classList.remove('sticky-navbar');
    }
}



ScrollReveal().reveal('.reveal-el-4s', { delay: 400, viewFactor: 0.40, reset: true });
ScrollReveal().reveal('.reveal-el-6s', { delay: 600, viewFactor: 0.40, reset: true });
ScrollReveal().reveal('.reveal-el-8s', { delay: 800, viewFactor: 0.40, reset: true });
