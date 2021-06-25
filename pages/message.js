let messageForm = document.getElementsByName("leave_message");
    document.addEventListener("submit", (e) =>{
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    console.log`(Name:${name} Email:${email} Message:${message})`;
    const newMessage = document.createElement("li")
    const messageSection = document.getElementById("messages")
    messageSection.style.display = 'block';
    const messageList = messageSection.querySelector("ul")
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> &nbsp;`
    const removeButton=document.createElement("button")
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click",(e)=>{
        const entry = removeButton.parentNode;
        entry.remove();
        if (messageList.children.length === 0){
            messageSection.style.display = 'none';
        }
});
newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
});