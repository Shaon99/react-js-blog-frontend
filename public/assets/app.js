const navSlide = () => {
    const navbtn = document.querySelector('.nav_btn');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');
    nav.style.display = 'none';
    
    navbtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.style.display = 'flex';
    });

    navlinks.forEach((link,index)=>{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 +.7}s`;
    });
}
navSlide();