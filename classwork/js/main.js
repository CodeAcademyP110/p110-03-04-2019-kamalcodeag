"use strict";
const colors = ["bisque", "red", "teal", "#555", "#ababab", "#cececr", "green", "blue"];

function RandomColorGenerator()
{
    const hexLetters = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.round(Math.random() * 15);
        color += hexLetters[index];        
    }

    return color;
}

const usernameInput = document.querySelector('input.username');
const menu = document.querySelector('.main-menu');
const btnRemove = document.querySelector('.btn-clear');

usernameInput.nextElementSibling.onclick = function()
{
    this.classList.add("d-none");
}

usernameInput.onkeyup = function(e)
{
    usernameInput.nextElementSibling.classList.add("d-none");
    //reads input value
    const username = this.value.trim();
    //console.log(e);
    if(e.keyCode === 13) //enter clicked
    {
        //check it
        if(username === "") return; //if input is empty finish function

        // const el = Array.from(menu.children).find(li => li.innerText === username);
        const el = [...menu.children].find(li => li.innerText === username);
        
        if(el !== undefined) //there is li exists
        {
            usernameInput.nextElementSibling.classList.remove("d-none");
            return;
        }
        
        const listItem = document.createElement('li'); //<li></li>
        listItem.className = "list-group-item d-flex justify-content-between"; //<li class="list-group-item"></li>
        listItem.innerText = username; //<li class="list-group-item">username</li>

        //<i class="fas fa-trash"></i>
        const icon = document.createElement('i');
        icon.className = "fas fa-trash mt-1";

        icon.onclick = function(){ this.parentElement.remove(); }
        
        usernameInput.value = "";

        listItem.appendChild(icon);
        menu.appendChild(listItem); //append (add, push) to the ul
    }
    else if(e.keyCode === 27) //escape clicked
    {
        usernameInput.value = "";
    }
    else
    {
        const el = [...menu.children].find(li => li.innerText === username);
        
        if(el !== undefined) //there is li exists
        {
            usernameInput.nextElementSibling.classList.remove("d-none");
            return;
        }
    }
}

//removes all
btnRemove.onclick = () => menu.innerHTML = "";

//removes last element
// btnRemove.onclick = () => {
//     menu.lastChild.remove();
// }

// document.body.oncontextmenu = function(){
//     // const index = Math.round(Math.random() * colors.length - 1);
//     document.body.style.backgroundColor = RandomColorGenerator();
// }

// setInterval(function(){
//     document.body.style.backgroundColor = RandomColorGenerator();
// }, 1000)

