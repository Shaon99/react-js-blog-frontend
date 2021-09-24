const navSlide = () => {
    const navbtn = document.querySelector('.nav_btn');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');
    navbtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    navlinks.forEach((link,index)=>{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 +1.3}s`;
    });
}
navSlide();