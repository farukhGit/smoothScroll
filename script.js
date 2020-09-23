let divBtn = document.querySelectorAll('nav a')
let currentPosition

let targetPosition = divBtn.forEach(element => {

    element.addEventListener('click', (e)=>{

        e.preventDefault();

        let scrollInterval = setInterval(()=>{

            if(document.querySelector(element.getAttribute('href')).getBoundingClientRect().bottom < window.innerHeight){
                clearInterval(scrollInterval);
            }
            window.scrollBy(0, 5)
            currentPosition = window.pageYOffset
        }, 5)        
    })
})



