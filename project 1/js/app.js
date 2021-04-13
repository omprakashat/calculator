let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";
    notesObj.forEach(function (element, index) {
        html += `<div class=" notecard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> Note ${index +1} </h5>
            <p class="card-text">${element}</p>
            <button id ="${index}" onclick="deletenote(this.id)" class="btn btn-primary"> Delete Note </button>
        </div>

</div> `;

    });

    let notesElm = document.getElementById('notes');
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML ='nothing to show';
    }
}
function deletenote(index)
{
    console.log('I am deleting ',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function()
{
    let inputval = search.value.toLowerCase();
    console.log('input event fired',inputval);
    let notecards =document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardTxt =element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display ="block";
        }
        else{
            element.style.display = "none";
        }

    })
});