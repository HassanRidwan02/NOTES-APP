let createBtn = document.getElementById('create-btn');
let noteContainer = document.querySelector('.note-container');
let notes = document.querySelectorAll('.input-box');

// Function to display saved data from localStorage
function showData() {
    noteContainer.innerHTML = localStorage.getItem('note') || '';
}

// Initial display of saved data
showData();

// Function to save data to localStorage
function saveData() {
    localStorage.setItem('note', noteContainer.innerHTML);
}

// Event listener for creating new notes
createBtn.addEventListener('click', () => {
    noteContainer.innerHTML += `
        <div class="input-container">
            <p class="input-box" contenteditable="true"></p>
            <button class="btn" id="delete-btn">Delete</button>
        </div>
    `;
    saveData(); // Save data after adding a new note
});

// Event delegation for handling click events within noteContainer
noteContainer.addEventListener('click', (e) => {
    if (e.target.id === 'delete-btn') {
        e.target.parentElement.remove();
        saveData(); // Save data after deleting a note
    }
});

// Event listener for handling keyup events within input boxes
noteContainer.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('input-box')) {
        saveData(); // Save data whenever content is edited in a note
    }
});
