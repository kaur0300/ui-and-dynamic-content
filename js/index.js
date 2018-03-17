let input = document.querySelector(".input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let feedback = document.querySelector(".feedback");

function addItem() {
    

    if(input.value && input.value != " ") { 
        let li = document.createElement("li");   
        li.textContent = input.value;
        ul.appendChild(li);
        feedback.textContent = " ";
        input.value = " ";
        input.focus();
    } else{
        feedback.textContent = "Please, Enter any item!";
    }
}

btn.addEventListener("click",addItem);