"use strict";

const textInput = document.querySelector('textarea.text');
const chat = document.querySelector('.chat');

textInput.onkeydown = function(e)
{
    //user pressed juist enter (not with shift)
    if(e.keyCode === 13 && e.shiftKey === false)
    {
        const userInput = textInput.value.trim();

        const div = document.createElement('div');
        if(userInput[0].toUpperCase() === userInput[0])
        {
            div.classList.add("left");
        }
        else
        {
            div.classList.add("right");
        }
        
        div.innerText = userInput;
        chat.appendChild(div);

        textInput.value="";
    }
}