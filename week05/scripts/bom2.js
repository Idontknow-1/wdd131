const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// declare array
let chaptersArray = getChapterList() || [];

// populate displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// button click event
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
    }
});

// function receives parameter named item and deletes
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// set localStorage
function setChapterList() {
    localStorage.setItem('favChapterList', JSON,stringify(chaptersArray));
}

// define function to retrieve item
function getChapterList() {
    return JSON.stringify(localStorage.getItem('favChapterList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}