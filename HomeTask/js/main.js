"use strict"



let parent = document.getElementById("spec-inner");
let userInput = document.getElementById("input");

userInput.onkeydown = function (e)
{
    if(e.keyCode === 13 && e.shiftKey === false)
    {
        let inputValue = userInput.value.trim();
        let tag = document.createElement("span");
        let icon = document.createElement("i");

        if(inputValue !== "")
        {
            tag.innerHTML = inputValue;
            tag.className = "spec-style";
            icon.className = "far fa-times-circle spec-icon";
            parent.appendChild(tag);
            tag.appendChild(icon);
        }

        let parentTags = Array.from(parent.children).find(tag => tag.innerHTML === inputValue);
        
        if(parentTags !== undefined)
        {
           return;
        }

        icon.onclick = function()
        {
            this.parentElement.remove(tag);
        }
        
        userInput.value = "";
    }
    else if(e.keyCode === 27)
    {
        userInput.value = "";
    }
    else
    {
        return;
    }
}