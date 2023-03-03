const dragArea = document.querySelector('.drag-area'),
      createPost = document.querySelector('.create-post'),
      release = document.querySelector('.drag-area__sup-text'),
      tagsAddBtn = document.querySelector('.tags-add__btn'),
      tagsItem = document.querySelector('.tags-item'),
      tagsAddInp = document.querySelector('.tags-add__inp'),
      successful = document.querySelector('.successful'),
      successfulClose = document.querySelector('.successful__close')




successfulClose.addEventListener('click', () => {
    successful.classList.add('d-none')
});

window.addEventListener('click', (e) => {
    if(e.target == successful) {
        successful.classList.add('d-none')
    }
})

 //   Drag & Drop or browse
dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    release.textContent = 'Release to upload'
    dragArea.classList.add('hoverDrag')
});

console.log(dragArea.children[1])
dragArea.addEventListener('dragleave', () => {
    release.textContent = 'Drag & Drop'
    dragArea.classList.remove('hoverDrag');
});

dragArea.addEventListener('drop', (e) => {
    e.preventDefault();

    const image = e.dataTransfer.files[0];
    const video = e.dataTransfer.files[0];
    const fileType = image.type;
    
    const vid = dragArea.children[1]
    const img = dragArea.children[2]
    const delateImg = dragArea.children[3]

    const validExtensions = ['image/png', 'image/jpg', 'image/jpeg']
    const validExtensionsVid = ['video/mp4']

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
    } else if (validExtensionsVid.includes(fileType)) {
        let fileReaderVid = new FileReader();

        fileReaderVid.onload = () => {
            let fileUrl = fileReaderVid.result;

            vid.src = fileUrl;
            vid.classList.remove('d-none');
            delateImg.classList.remove('d-none');
            dragArea.classList.add('validDrag');
        };
        fileReaderVid.readAsDataURL(video)
    } else {
        dragArea.classList.add('invalidDrag')
        alert('This file is not an *.jpeg, *.jpg, *.png, *.gif,*.mp4')
    }

    delateImg.addEventListener('click', () => {
        img.src = '';
        vid.src = '';
        delateImg.classList.add('d-none');
        img.classList.add('d-none');
        vid.classList.add('d-none');
        dragArea.classList.remove('validDrag');
        release.textContent = 'Drag & Drop'
    });
});

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