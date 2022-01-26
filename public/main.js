var menu = document.getElementById("menu")
let menuOpen = false;

if(menu){
  menu.addEventListener('click', swapper, false);
}
menu.addEventListener('click', () => {
  if(!menuOpen){
    menu.classList.add('open');
    menuOpen = true;
  }
  else{
    menu.classList.remove('open');
    menuOpen = false;
  }
});
