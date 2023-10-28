let input = document.getElementById('inp');
let text = document.querySelector('.text');

function add(){
    if(input.value == ""){
        alert("Enter Task to Add");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = (`${input.value} <i class="fa-solid fa-trash"></i>`);
        text.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click", removes)
        function removes(){
            newEle.remove();
        }
    }
}