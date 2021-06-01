let today;
let thisYear;

today = new Date();
console.log(today);

thisYear = today.getFullYear();
console.log(thisYear);


const footer=document.querySelector("footer")
console.log(footer)

const copyright = document.createElement("p")
console.log(copyright)

copyright.innerHTML=`Tadesse &copy${thisYear}`;

footer.appendChild(copyright)

const skills = ['HTML','CSS','Javascript']

const skillsSection=document.getElementById('skills')
console.log(skillsSection)

const skillsList = document.querySelector('ul')
console.log(skills)

for ( let i=0 ; i < skills.length; i++)
{
let skill = document.createElement('li')
skill.innerHTML=skills[i]
console.log(skill.innerHTML)
skillsSection.appendChild(skill)

}