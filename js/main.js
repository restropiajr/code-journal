
// Input Event Listener
const $photoURL = document.querySelector('#photo-url');
const $photoPreview = document.querySelector('#photo-preview');
$photoURL.addEventListener('input', () => {
  $photoPreview.setAttribute('src', $photoURL.value);
});

// Submit Event Listener
const $form = document.querySelector('#entry-form');
const $title = document.querySelector('#title');
const $notes = document.querySelector('#notes');
$form.addEventListener('submit', event => {
  event.preventDefault();

  if (data.editing === null) {
    const entry = {
      entryId: data.nextEntryId,
      title: $title.value,
      URL: $photoURL.value,
      notes: $notes.value
    };

    data.entries.unshift(entry);
    data.nextEntryId++;

    $ul.prepend(renderEntry(entry));

    $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
    $form.reset();
    toggleNoEntries();
    viewSwap('entries');

  } else {

    const edittedEntry = {
      entryId: data.editing.entryId,
      title: $title.value,
      URL: $photoURL.value,
      notes: $notes.value
    };

    for (let i = 0; i < data.entries.length; i++) {
      if (edittedEntry.entryId === data.entries[i].entryId) {
        data.entries[i] = edittedEntry;
      }
    }

    const $currentLi = document.querySelector(`li[data-entry-id="${edittedEntry.entryId}"]`);
    const $newLi = renderEntry(edittedEntry);
    $currentLi.replaceWith($newLi);

    $newEditEntry.textContent = 'New Entry';
    $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
    $form.reset();
    data.editing = null;
    toggleNoEntries();
    viewSwap('entries');
  }

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
  $pencilIcon.className = 'fa-solid fa-pencil fa-beat fa-xl';
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
  } else {
    $noEntriesMessage.classList.remove('hidden');
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
  $photoPreview.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  searchBarReset();
  $newEditEntry.textContent = 'New Entry';
  data.editing = null;
  $deleteButton.classList.add('hidden');
  viewSwap('entry-form');
});

// Entries View Event Listener
const $entriesViewAnchor = document.querySelector('#entries-button');
$entriesViewAnchor.addEventListener('click', event => {
  data.editing = null;
  searchBarReset();
  viewSwap('entries');
});

// Edit View Event Listener
const $deleteButton = document.querySelector('#delete-button');
const $newEditEntry = document.querySelector('#new-edit-entry');
$ul.addEventListener('click', event => {
  searchBarReset();

  if (event.target.classList.contains('fa-pencil')) {

    $deleteButton.classList.remove('hidden');
    const $li = event.target.closest('li');
    const editingEntryId = $li.getAttribute('data-entry-id');
    for (const entry of data.entries) {
      if (entry.entryId === Number(editingEntryId)) {
        data.editing = entry;
      }
    }
    $title.value = data.editing.title;
    $photoURL.value = data.editing.URL;
    $notes.value = data.editing.notes;
    $photoPreview.setAttribute('src', $photoURL.value);

    $newEditEntry.textContent = 'Edit Entry';
    viewSwap('entry-form');
  }
});

// Delete Entry Event Listener
const $modalContainerDiv = document.querySelector('.modal-container');
const $cancelButton = document.querySelector('#cancel-button');
const $confirmButton = document.querySelector('#confirm-button');
$deleteButton.addEventListener('click', event => {
  $modalContainerDiv.classList.remove('hidden');
});

// Modal Cancel and Confirm Event Listener
$modalContainerDiv.addEventListener('click', event => {

  if (event.target === $cancelButton) {
    $modalContainerDiv.classList.add('hidden');
  } else if (event.target === $confirmButton) {

    const deletingEntryId = data.editing.entryId;

    for (let i = 0; i < data.entries.length; i++) {
      if (deletingEntryId === data.entries[i].entryId) {
        data.entries.splice(i, 1);
        const $deletingLi = document.querySelector(`li[data-entry-id="${deletingEntryId}"]`);
        $deletingLi.remove();
        break;
      }
    }

    data.editing = null;
    $modalContainerDiv.classList.add('hidden');
    viewSwap('entries');
    toggleNoEntries();
  }
});

// Search Entry Event Listener
const $searchForm = document.querySelector('#search-form');
const $searchBar = document.querySelector('#search-bar');

$searchForm.addEventListener('input', event => {
  const searchText = event.target.value.toLowerCase();

  for (const entry of data.entries) {
    const titleMatch = entry.title.toLowerCase();
    const notesMatch = entry.notes.toLowerCase();

    const $li = document.querySelector(`li[data-entry-id="${entry.entryId}"]`);
    if (titleMatch.includes(searchText) || notesMatch.includes(searchText)) {
      $li.classList.remove('hidden');
    } else {
      $li.classList.add('hidden');
    }

  }
});

function searchBarReset() {
  $searchBar.value = '';
  for (const entry of data.entries) {
    const $li = document.querySelector(`li[data-entry-id="${entry.entryId}"]`);
    $li.classList.remove('hidden');
  }
}
