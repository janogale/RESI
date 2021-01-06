let textArea = document.querySelector("#textarea");
let note = document.querySelector("#note");

textArea.addEventListener("input", function (e) {
    e.preventDefault();
    // e.currentTarget.value;
    // textArea.value

    // tell the remain length

    if(this.value.length < 50){
        document.getElementById('alert').classList.add('hidden');
        note.innerHTML =  `${this.value.length} of 50 is remaining`;
        note.className = 'success';
    }

    if(this.value.length > 50) {

        document.getElementById('alert').classList.remove('hidden');

        note.className = 'danger';
        note.innerHTML = 'limit of 50 is passed'
    }



        
    textArea.maxLength = 50;

   


});
