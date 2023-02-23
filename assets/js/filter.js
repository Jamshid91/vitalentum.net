const filter = document.querySelector('.filter'),
      filterBtn = document.querySelector('.filter__btn'),
      filterClose = document.querySelector('.filter-close');



filterBtn.addEventListener('click', () => {
    filter.classList.add('showFilter')
});

filterClose.addEventListener('click', () => {
    filter.classList.remove('showFilter')
});