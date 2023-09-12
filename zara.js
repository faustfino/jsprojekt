function search_clothes() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('clothes');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

let search = document.getElementById('search'); 
let box = document.querySelectorAll('.box');
search.addEventListener('keyup',(e) => {
    if (e.key == "Enter") {
     let inputvalue = search.value.toLowerCase();
     box.forEach((image)=>{
        if(inputvalue === image.dataset.name){
            image.style.display = 'block';

        } else {
            image.style.display = 'none';
        }
     })
    }
})
search.addEventListener('keyup',() => {
    let inputvalue = search.value.toLowerCase();
    if(inputvalue !="") return;
    box.forEach((image)=>{
        image.style.display = 'block';

    })
})
