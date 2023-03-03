const coverImg = document.querySelector('.cover-img'),
      userAvatar = document.getElementById('userAvatar'),
      selectLists = document.querySelectorAll('.select-list'),
      selectItems = document.querySelectorAll('.select-item input'),
      editEmail = document.querySelector('.editEmail'),
      disabled = document.querySelector('.disabled'),
      editBox = document.querySelector('.editBox'),
      editBoxClose = document.querySelector('.editBox-close'),
      newPass = document.getElementById('newPass'),
      confirmPass = document.getElementById('confirmPass'),
      confirmPassText = document.querySelector('.confirmPass__text'),
      changePassSave = document.querySelector('.change-pass-save')


      userAvatar.addEventListener('change', (e) => {
                e.target.parentElement.children[1]
            if(e.target.files.length > 0) {
              let src = URL.createObjectURL(e.target.files[0]);
              let addAvatar = e.target.parentElement.children[1];
              addAvatar.src = src;
              addAvatar.style.display = 'block'
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


      userAvatar.addEventListener('change', (e) => {
        e.target.parentElement.children[1]
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let addAvatar = e.target.parentElement.children[1];
      addAvatar.src = src;
      addAvatar.style.display = 'block'
    }
});


      changeCoverImg.addEventListener('change', (e) => {
                e.target.parentElement.children[1]
            if(e.target.files.length > 0) {
              let src = URL.createObjectURL(e.target.files[0]);
              coverImg.src = src;
            }
      });

      function checkNumber(event) {
        let aCode = event.which ? event.which : event.keyCode;
        if (aCode > 31 && (aCode < 42 || aCode > 57)) return false;
        return true;
        }

        $(document).ready(function() {
          $('.filter-box').hide();
          $('.filter-box:first-child').show();
          $('.filter__btn').click(function() {
            let pageInfo = $(this).attr('data-radio');
            $('.filter-box').hide();
            $('.' + pageInfo).show();
          })
        });

        editEmail.addEventListener('click', () => {
          disabled.classList.add('d-none');
          editEmail.classList.remove('d-flex')
          editBox.classList.remove('d-none')
        });

        editBoxClose.addEventListener('click', () => {
          disabled.classList.remove('d-none');
          editEmail.classList.add('d-flex')
          editBox.classList.add('d-none')
        });


        changePassSave.addEventListener('click', () => {
          if(newPass.value.length != 0) {
            if(newPass.value != confirmPass.value) {
              confirmPassText.textContent = 'Confirm password not match'
            } else {
              confirmPassText.textContent = ''
            }
          }
        })

