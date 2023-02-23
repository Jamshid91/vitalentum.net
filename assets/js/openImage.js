const addLikeBtn = document.querySelector('.addLikeBtn')


addLikeBtn.addEventListener('click', () => {
    addLikeBtn.children[1].classList.toggle('animLike');
});
