

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

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    console.log`(Name:${name} Email:${email} Message:${message})`;
    const newMessage = document.createElement("li")
    newMessage.innerHTML = `<a href="mailto:${email}">email</a><span>:${message}</span>`
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset()
});
const messageSection = document.getElementById("messages")
const messageList = messageSection.querySelector("ul")

const removeButton=document.createElement("button")
removeButton.innerHTML = "remove";
removeButton.type = "button";
removeButton.addEventListener("click",(e)=>{
const entry = e.target.parentNode;
entry.remove();
});








