
// Photo Preview Change
const $photoURLInput = document.querySelector('#photo-url');
const $photoPreview = document.querySelector(('#photo-preview'));

$photoURLInput.addEventListener('input', () => {
  $photoPreview.setAttribute('src', $photoURLInput.value);
});
