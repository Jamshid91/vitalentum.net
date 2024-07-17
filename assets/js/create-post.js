const dragArea = document.querySelector('.create-post .drag-area'),
      createPost = document.querySelector('.create-post'),
      createPostClose = document.querySelectorAll('.create-post .close-modal'),
      step1 = document.querySelector('.create-post .step1'),
      step2 = document.querySelector('.create-post .step2'),
      nextStep = document.querySelector('.create-post .next-step'),
      release = document.querySelector('.create-post .drag-area__sup-text'),
      tagsAddBtn = document.querySelector('.create-post .tags-add__btn'),
      tagsItem = document.querySelector('.create-post .tags-item'),
      tagsAddInp = document.querySelector('.create-post .tags-add__inp'),
      publishPost = document.querySelector('.create-post .publishPost'),
      addPost = document.getElementById('addPost')
      coverImg = document.querySelector('.cover-img'),
      changeCoverImg = document.getElementById('changeCoverImg')



changeCoverImg.addEventListener('change', (e) => {
        e.target.parentElement.children[1]
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      coverImg.src = src;
    }
});

addPost.addEventListener('click', () => {
    createPost.classList.remove('d-none');
    step1.classList.remove('d-none');
});

createPostClose.forEach(btn => {
    btn.addEventListener('click', () => {
        createPost.classList.add('d-none')
    })
});

window.addEventListener('click', (e) => {
    if(e.target == createPost) {
        createPost.classList.add('d-none')
    }
});

nextStep.addEventListener('click', () => {
    step1.classList.add('d-none');
    step2.classList.remove('d-none');
});
publishPost.addEventListener('click', () => {
    step1.classList.add('d-none');
    step2.classList.add('d-none');
    createPost.classList.add('d-none')
});

 //   Drag & Drop or browse
dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    release.textContent = 'Release to upload'
    dragArea.classList.add('hoverDrag')
});

dragArea.addEventListener('dragleave', () => {
    release.textContent = 'Drag & Drop'
    dragArea.classList.remove('hoverDrag');
});

dragArea.addEventListener('drop', (e) => {
    e.preventDefault();

    const image = e.dataTransfer.files[0];
    const fileType = image.type;
    
    const img = dragArea.children[1]
    const delateImg = dragArea.children[2]

    const validExtensions = ['image/png', 'image/jpg', 'image/jpeg']

    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileUrl = fileReader.result;

            img.src = fileUrl;
            img.classList.remove('d-none');
            delateImg.classList.remove('d-none');
            dragArea.classList.add('validDrag');
        };
        fileReader.readAsDataURL(image)
    } else {
        dragArea.classList.add('invalidDrag')
        alert('This file is not an Image')
    }

    delateImg.addEventListener('click', () => {
        img.src = '';
        delateImg.classList.add('d-none');
        img.classList.add('d-none');
        dragArea.classList.remove('validDrag');
        release.textContent = 'Drag & Drop'
    });
});

// Add tags


tagsAddBtn.addEventListener('click', () => {
    if(tagsAddInp.value == '') {
        tagsAddInp.classList.add('redBorder')
    } else {
        tagsAddInp.classList.remove('redBorder');
        let tag = document.createElement('div');

        tag.classList.add('tag');
        tagsItem.appendChild(tag);
        
        tag.innerHTML = '#' + ' ' + tagsAddInp.value  + '<span class="remove"></span>'

        let remove = document.querySelectorAll('.tag .remove');

        remove.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
            })
        })
    }
    tagsAddInp.value = ''
})
