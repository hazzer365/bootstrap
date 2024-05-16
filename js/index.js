const Header = document.querySelector('header');

window.addEventListener('scroll', () => {
    Header.classList.toggle('sticky', window.scrollY > 80);
});
