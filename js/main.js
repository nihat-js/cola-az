const leftNav = document.querySelector('.left-nav')
const hamburger = document.querySelector('nav .menu img')

document.getElementById('search-img').addEventListener('click',()=>{
    document.querySelector('nav .search input').style.width = "200px";
})

hamburger.addEventListener('click',()=>{

    if (leftNav.classList.contains('d-none')){
        leftNav.classList.remove('d-none')
        hamburger.src = "img/close.svg"
    }else{
        leftNav.classList.add('d-none')
        hamburger.src = "img/menu.png"
    }

})


document.body.addEventListener('wheel',(e)=>{
    let height = document.body.scrollHeight
    let currentHeight = e.pageY

    percentage = currentHeight / height  * 100
    document.querySelector('.line').style.width = percentage + "%"

})