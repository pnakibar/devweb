
Array.from(document.getElementsByClassName('info like')).forEach(e =>
  e.addEventListener('click', function () {
    if (!this.classList.contains('liked')) {
      console.log('asd');
      this.classList.add('liked');
    }
  })
)
