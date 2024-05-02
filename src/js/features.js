
document.addEventListener('DOMContentLoaded', () => {

    let button = document.getElementById('button-theme');

    console.log(button);

    button.addEventListener('click', () => {
        // Toggle theme dark/light
        let tagHtml = document.getElementsByTagName('html')[0];
    
        let isDark = tagHtml.classList.toggle('theme-dark');
    
        if (isDark) {
            button.innerHTML = `<span class="icon" style="color: #8156F5;"><i class="fas fa-lg fa-moon"></i></span>`;
        } else {
            button.innerHTML = `<span class="icon" style="color: rgb(226, 226, 56);"><i class="fas fa-lg fa-sun"></i></span>`;
        }
    })

    

    // Dando comportamento ao menu hamburguer
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });