
const button=document.getElementById('lol');
const body=document.getElementsByTagName('body')[0];

const colors=['pink','blue','yellow','red','orange','purple','black','white'];

body.style.backgroundColor='maroon';
button.addEventListener('click',changebgcolor);

function changebgcolor() {
    const colorInd=parseInt(Math.random()* colors.length);
    body.style.backgroundColor=colors[colorInd];
}