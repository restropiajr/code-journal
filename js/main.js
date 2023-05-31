
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

  $ul.prepend(renderEntry(entry));
  viewSwap('entries');
  toggleNoEntries();

  $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});

// Render Entry Function
function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);

  const $rowDivOne = document.createElement('div');
  $rowDivOne.className = 'row';
  $li.appendChild($rowDivOne);

  const $imgContainerColumnHalfDiv = document.createElement('div');
  $imgContainerColumnHalfDiv.className = 'img-container column-half';
  $rowDivOne.appendChild($imgContainerColumnHalfDiv);

  const $img = document.createElement('img');
  $img.setAttribute('src', entry.URL);
  $imgContainerColumnHalfDiv.appendChild($img);

  const $columnHalfDivOne = document.createElement('div');
  $columnHalfDivOne.className = 'column-half';
  $rowDivOne.appendChild($columnHalfDivOne);

  const $rowDivTwo = document.createElement('div');
  $rowDivTwo.className = 'row';
  $columnHalfDivOne.appendChild($rowDivTwo);

  const $columnfullDivTwo = document.createElement('div');
  $columnfullDivTwo.className = 'column-full';
  $rowDivTwo.appendChild($columnfullDivTwo);

  const $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $columnfullDivTwo.appendChild($h3);

  const $pencilIcon = document.createElement('i');
  $pencilIcon.className = 'fa-solid fa-pencil fa-2xl';
  $columnfullDivTwo.appendChild($pencilIcon);

  const $columnFullDivThree = document.createElement('div');
  $columnFullDivThree.className = 'column-full';
  $rowDivTwo.appendChild($columnFullDivThree);

  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $columnFullDivThree.appendChild($p);

  return $li;
}

// DOM Content Loaded Event Listener
const $ul = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', event => {
  for (const entry of data.entries) {
    $ul.appendChild(renderEntry(entry));
  }
  viewSwap(data.view);
  toggleNoEntries();
});

// Toggle No Entries Function
const $noEntriesMessage = document.querySelector('#no-entries-message');
function toggleNoEntries() {
  if (data.entries.length !== 0) {
    $noEntriesMessage.classList.add('hidden');
  }
}

// View Swap Function
const $entryFormview = document.querySelector('[data-view="entry-form"]');
const $entriesView = document.querySelector('[data-view="entries"]');
function viewSwap(view) {

  if (view === 'entry-form') {
    $entryFormview.classList.remove('hidden');
    $entriesView.classList.add('hidden');
  } else if (view === 'entries') {
    $entryFormview.classList.add('hidden');
    $entriesView.classList.remove('hidden');
  }

  data.view = view;
}

// Entry Form View Event Listener
const $entryFormAnchor = document.querySelector('#new-button');
$entryFormAnchor.addEventListener('click', event => {
  viewSwap('entry-form');
});

// Entries View Event Listener
const $entriesViewAnchor = document.querySelector('#entries-button');
$entriesViewAnchor.addEventListener('click', event => {
  viewSwap('entries');
});
