Array.from(document.getElementsByClassName('like-button')).forEach(e => {
  e.addEventListener('click', function () {
    if (!this.classList.contains('liked')) {
      this.classList.add('liked');
    }
  })
})
