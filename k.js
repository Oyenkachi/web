// document.querySelector('.btn').addEventListener('click', love)

function love(){
    alert('I Love Web3 as well')
}


const docElement = document.querySelectorAll('.btn');

for(let i=0; i < docElement.length; i++){
    docElement[i].addEventListener('click', love)
}