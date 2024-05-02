
document.addEventListener('DOMContentLoaded', () => {

    // Toggle theme dark/light
    let button = document.getElementById('button-theme');

    let tagHtml = document.getElementsByTagName('html')[0];

    tagHtml.classList.add('theme-light');
    button.innerHTML = `<span class="icon" style="color: rgb(226, 226, 56);"><i class="fas fa-lg fa-sun"></i></span>`;

    button.addEventListener('click', () => {
        tagHtml.classList.toggle('theme-light')
        
        let isDark = tagHtml.classList.toggle('theme-dark')
        
        if (isDark) {
          button.innerHTML = `<span class="icon" style="color: #8156F5;"><i class="fas fa-lg fa-moon"></i></span>`;
        } else {
          button.innerHTML = `<span class="icon" style="color: rgb(226, 226, 56);"><i class="fas fa-lg fa-sun"></i></span>`;
        }
    })

    

    // Dando comportamento de expansão ao menu hamburguer
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });