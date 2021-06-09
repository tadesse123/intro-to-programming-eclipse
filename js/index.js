

let today = new Date();
//console.log(today);

let thisYear = today.getFullYear();
//console.log(thisYear);


const footer=document.querySelector("footer")
//console.log(footer)

const copyright = document.createElement("p")
//console.log(copyright)

copyright.innerHTML=`Tadesse &copy; ${thisYear}`;

footer.appendChild(copyright)

const skills = ['HTML','CSS','Javascript']

const skillsSection=document.getElementById('skills')
console.log(skillsSection)

const skillsList = skillsSection.querySelector('ul')
console.log(skills)

for ( let i=0 ; i < skills.length; i++)
{
let skill = document.createElement('li')
skill.innerHTML=skills[i]
console.log(skill.innerHTML)
skillsList.appendChild(skill)

}

let messageForm = document.getElementsByName("leave_message");
    document.addEventListener("submit", (e) =>{
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    console.log`(Name:${name} Email:${email} Message:${message})`;
    const newMessage = document.createElement("li")
    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector("ul")
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> &nbsp;`
    const removeButton=document.createElement("button")
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click",(e)=>{
        const entry = removeButton.parentNode;
        entry.remove();
});
newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    e.target.reset();
});









