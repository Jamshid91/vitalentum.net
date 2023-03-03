const viewPass = document.querySelector('.eyes');

viewPass.addEventListener('click', () => {
   let pass = viewPass.parentElement.children[0];
   let show = viewPass.children[1];
    if (pass.type === "password") {
        pass.type = "text";
        show.style.display = 'block'
      } else {
        pass.type = "password";
        show.style.display = 'none'
      }
});