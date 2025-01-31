document.addEventListener('click', function(event) {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Check if the click is outside the navbar and the navbar is expanded
    if (!navbarCollapse.contains(event.target) && 
        !navbarToggler.contains(event.target) && 
        navbarCollapse.classList.contains('show')) {
        // Close the navbar
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});