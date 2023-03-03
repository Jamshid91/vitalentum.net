const newest = document.querySelector('.newest-active'),
      newestLists = document.querySelectorAll('.newest-list'),
      changePassSave = document.querySelector('.change-pass-save')



newest.addEventListener('click', () => {
    newest.parentElement.classList.toggle('showNewest')
});

newestLists.forEach(list => {
    list.addEventListener('click', () => {
        newest.children[0].innerText = list.innerText
        newest.parentElement.classList.toggle('showNewest')
    })
})
