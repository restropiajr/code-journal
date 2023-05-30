
// Input Event Listener
const $photoURL = document.querySelector('#photo-url');
const $photoPreview = document.querySelector(('#photo-preview'));

$photoURL.addEventListener('input', () => {
  $photoPreview.setAttribute('src', $photoURL.value);
});

// Submit Event Listener
const $form = document.querySelector('form');
const $title = document.querySelector('#title');
const $notes = document.querySelector('#notes');

$form.addEventListener('submit', event => {
  event.preventDefault();

  const entry = {
    entryId: data.nextEntryId,
    title: $title.value,
    URL: $photoURL.value,
    notes: $notes.value
  };

  data.entries.unshift(entry);
  data.nextEntryId++;

  $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});
