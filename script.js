let text = document.querySelector('.text')
let button = document.querySelector('.button')
let buttoni = document.querySelector('.button i')
let flag=true
button.addEventListener('click', ()=>{
fetch('https://api.chucknorris.io/jokes/random')
.then((res) => res.json())
.then((data) => {
text.textContent = data.value

    buttoni.classList.toggle('all')
    console.log(buttoni)
   



})
})