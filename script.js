let divBtn = document.querySelectorAll('nav a')
let currentPosition = window.pageYOffset;

 let targetPosition = divBtn.forEach(element => {

    element.addEventListener('click', ()=>{

        return document.querySelector(element.getAttribute('href')).getBoundingClientRect().top
    })
})



// let scrollInterval = setInterval(()=>{

//     if(targetPosition >= currentPosition){
//         clearInterval(scrollInterval);
//     }
//     window.scrollBy(0, 40)
//     currentPosition += 40
// }, 20)        