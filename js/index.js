let today = new Date();
// console.log(today);

let thisYear = today.getFullYear();
//console.log(thisYear);

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



function myFunction(){
    var x= document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += "responsive";
    }else{ 
        x.className="topnav";
    }
}

const githubRequest = new XMLHttpRequest();
const url = "https://api.github.com/users/tadesse123/repos";
githubRequest.open("GET", url, true);
githubRequest.send();
githubRequest.onload = function (){
    let repositories =JSON.parse(this.response);
    console.log("before parse" , this.respones);
    console.log("response" , repositories)
    let projectSection=document.getElementById("project");
    let projectList=projectSection.querySelector('ul')
    for ( let i=0; i<repositories.length; i++){
        let project = document.createElement('li');
        project.innerHTML=`
        <a href="${repositories[i].html_url}">${repositories[i].name}</a>
        <p>${repositories[i].description}</p>
        `;
      
        console.log("my repo", repositories[i].name)
        projectList.appendChild(project)
    

 }
 }