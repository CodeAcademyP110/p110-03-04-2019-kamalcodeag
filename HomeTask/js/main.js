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

            let allTags = document.querySelectorAll(".spec-style");
            let foundTag = Array.from(allTags).find(el => el.innerHTML === inputValue);
            
            if(foundTag !== undefined)
            {
               parent.insertBefore(foundTag, userInput);
               userInput.value = "";
               return;
            }

            tag.innerHTML = inputValue;
            tag.className = "spec-style";
            icon.className = "far fa-times-circle spec-icon";
            // parent.appendChild(tag);
            parent.insertBefore(tag, userInput);
            tag.appendChild(icon);
            userInput.value = "";
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