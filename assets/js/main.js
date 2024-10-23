document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.topmenu-burger');
    const mobileMenu = document.querySelector('.sidebar.mobile-side');

    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
        burger.classList.toggle('show');
    });
});