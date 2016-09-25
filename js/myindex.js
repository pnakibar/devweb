Array.from(document.getElementsByClassName('like-button')).forEach(e => {
  e.addEventListener('click', function () {
    if (!this.classList.contains('liked')) {
      this.classList.add('liked');
    }
  })
})

(function() {
  var updateButton = document.getElementById('updateDetails');
  var cancelButton = document.getElementById('cancel');
  var favDialog = document.getElementById('favDialog');

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function() {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener('click', function() {
    favDialog.close();
  });

})();
