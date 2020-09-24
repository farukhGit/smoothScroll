let divBtn = document.querySelectorAll('nav a')
let currentPosition 
let total = document.getElementById('div-3').getBoundingClientRect().top
let scrollPercentage = document.getElementById('scroll-percentage-display')
let scrollProgressBar = document.getElementById('scroll-progress-bar')

scrollPercentage.innerText = '0%'


let targetPosition = divBtn.forEach(element => {

    element.addEventListener('click', (e)=>{

        e.preventDefault();

        let scrollInterval = setInterval(()=>{

            if(document.querySelector(element.getAttribute('href')).getBoundingClientRect().top <= 0){
                clearInterval(scrollInterval);
            }
            window.scrollBy(0, 5)
            currentPosition = window.pageYOffset
        }, 5)        
    })
})


document.addEventListener('scroll', ()=>{

    scrollPercentage = parseInt(window.pageYOffset / total * 100)
    document.getElementById('scroll-percentage-display').innerText = scrollPercentage + '%'
    
    scrollProgressBar.style.borderLeftWidth = scrollPercentage * window.innerWidth / 100 + 'px'
})

