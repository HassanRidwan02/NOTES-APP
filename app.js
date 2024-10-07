let createBtn = document.getElementById('create-btn')
let noteContainer = document.querySelector('.note-container')
let notes = document.querySelectorAll('.input-box')

function showData(){
    noteContainer.innerHTML = localStorage.getItem('note')
}

showData()

function saveData(){
    localStorage.setItem('note', noteContainer.innerHTML)
}


createBtn.addEventListener('click', ()=>{
    noteContainer.innerHTML += `
        <div class="input-container">
                <p class="input-box" contenteditable="true"></p>
                <button class="btn" id="delete-btn">Delete</button>
            </div>
    `
    
})


noteContainer.addEventListener('click', (e)=>{
    if (e.target.id === 'delete-btn'){
        e.target.parentElement.remove()
        saveData()
    }
    else if(e.target.tagName === "P"){
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                saveData()
            }
        })
    }
})


