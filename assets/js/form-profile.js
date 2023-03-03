const userAvatar = document.getElementById('userAvatar'),
      selectLists = document.querySelectorAll('.select-list'),
      selectItems = document.querySelectorAll('.select-item input')
      changeAvatar = document.querySelector('.change-avatar')


      userAvatar.addEventListener('change', (e) => {
                e.target.parentElement.children[1]
            if(e.target.files.length > 0) {
              let src = URL.createObjectURL(e.target.files[0]);
              let addAvatar = e.target.parentElement.children[1];
              addAvatar.src = src;
              addAvatar.style.display = 'block'
              changeAvatar.classList.add('d-flex')
            }
      });

      selectItems.forEach(item => {
        item.addEventListener('click', () => {
          item.parentElement.children[4].classList.remove('d-none');
          item.style.border = '1px solid #F37A10;'
        })
      })

      selectLists.forEach(list => {
        list.addEventListener('click', () => {
          list.parentElement.parentElement.children[0].value = list.textContent
          list.parentElement.classList.add('d-none');
        })
      });

