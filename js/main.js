
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

// Render Entry Function
function renderEntry(entry) {
  const li = document.createElement('li');

  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  li.appendChild(rowDiv);

  const imgContainerColumnHalfDiv = document.createElement('div');
  imgContainerColumnHalfDiv.className = 'img-container column-half';
  rowDiv.appendChild(imgContainerColumnHalfDiv);

  const img = document.createElement('img');
  img.setAttribute('src', entry.URL);
  imgContainerColumnHalfDiv.appendChild(img);

  const columnHalfDiv = document.createElement('div');
  columnHalfDiv.className = 'column-half';
  rowDiv.appendChild(columnHalfDiv);

  const h3 = document.createElement('h3');
  h3.textContent = entry.title;
  columnHalfDiv.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalfDiv.appendChild(p);

  return li;
}

// Toggle No Entries Function
const ul = document.querySelector('ul');
const entryViewDiv = document.querySelector('#entry-view');

function toggleNoEntries() {
  const noEntriesMessage = document.createElement('p');
  noEntriesMessage.textContent = 'No entries have been recorded.';
  ul.remove();
  entryViewDiv.appendChild(noEntriesMessage);
}

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', event => {
  if (data.entries.length === 0) {
    toggleNoEntries();
  } else {
    for (const entry of data.entries) {
      ul.appendChild(renderEntry(entry));
    }
  }
});

// View Swap Function
function viewSwap(view) {

  const entryFormview = document.querySelector('[data-view="entry-form"]');
  const entriesView = document.querySelector('[data-view="entries"]');

  entryFormview.classList.add('hidden');
  entriesView.classList.add('hidden');

  if (view === 'entry-form') {
    entryFormview.classList.remove('hidden');
  } else {
    entriesView.classList.remove('hidden');
  }

  data.view = view;
}

// Entries View Event Listener
const entriesViewAnchor = document.querySelector('#entries-button');

entriesViewAnchor.addEventListener('click', event => {
  viewSwap('entries');
});

// Entry Form View Event Listener
const entryFormAnchor = document.querySelector('#new-button');

entryFormAnchor.addEventListener('click', event => {
  viewSwap('entry-form');
});
