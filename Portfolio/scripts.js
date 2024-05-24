document.getElementById('burger-menu').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    const isOpen = navList.classList.contains('open');
    navList.classList.toggle('open', !isOpen);
    this.setAttribute('aria-expanded', String(!isOpen));
});

const dropdownLinks = document.querySelectorAll('.dropdown > a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
    });
});
