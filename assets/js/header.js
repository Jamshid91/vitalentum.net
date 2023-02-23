const headerBurger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),     
      body = document.querySelector('body');



    headerBurger.addEventListener('click', ()=> {
      menu.classList.add('showMenu');
      body.classList.add('overflow-hidden'); 
  });
  
  menuClose.addEventListener('click', ()=> {
      menu.classList.remove('showMenu');
      body.classList.remove('overflow-hidden'); 
  });

window.onclick = function(e) {
  if(e.target == menu){
    menu.classList.remove('showMenu');
    body.classList.remove('overflow-hidden'); 
  }
}

