const btn = document.getElementById('submitButton');

btn.addEventListener('click', function onClick() {
  const val = document.getElementById('prompt').value
  window.location.assign('select', val);
});